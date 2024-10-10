//@ts-nocheck

import cloneDeep from "lodash.clonedeep";
import isEqual from "lodash.isequal";
import { reactive, watch } from "vue";

export default function useForm(fields) {

    //initial fields values
    let defaults = fields;

    /**to not end up with differents time out, we stock the result in an id, this id will be clear on the onBefore Hook. The id is created on the onSuccess Hook **/
    let recentlySuccessfulTimeoutId;

    const form = reactive({
        /** By default, because of how Javascript works, any change mades to the filed property which is an object will be reflected in all the other objects. So we clone the object. Any changes made to the fields property wont after any other objects */
        fields: cloneDeep(fields),
        errors: {},
        dirty: false,
        hasErrors: false,
        processing: false,
        wasSuccessful: false,
        recentlySuccessful: false,

        async submit(submitFn, hooks = {}) {

            if(this.processing) return;

            const _hooks = {
                onBefore: async () => {
                    this.processing = true;
                    this.wasSuccessful = false;
                    this.recentlySuccessful = false;
                    clearTimeout(recentlySuccessfulTimeoutId);
                    if(hooks.onBefore) {
                        await hooks.onBefore();
                    }
                },

                onSuccess: async (response) => {
                    this.clearErrors();
                    this.wasSuccessful = true;
                    this.recentlySuccessful = true;

                    //this.recentlySuccessful should be turn back to false in a short built of time, for that we set a time out
                    recentlySuccessfulTimeoutId = setTimeout(() => {
                        this.recentlySuccessful = false;
                    }, 2000);

                    if(hooks.onSuccess) {
                        await hooks.onSuccess(response);
                    }

                    defaults = cloneDeep(this.fields);
                },

                onError: async (error) => {
                    if(error?.status === 422) {
                        this.clearErrors();
                        this.setErrors(error.data?.errors)
                    }

                    if(hooks.onError) {
                        await hooks.onError(error);
                    }
                },

                onFinish: async () => {
                    this.processing = false;

                    if(hooks.onFinish) {
                        await hooks.onFinish();
                    }
                },
            }

            await _hooks.onBefore();

            try {
                const response = await submitFn(this.fields);
                await _hooks.onSuccess(response);
            } catch(error) {
                await _hooks.onError(error);
            } finally {
                await _hooks.onFinish();
            }
        },

        reset(...fields) {
            const clonedDefaults = cloneDeep(defaults);

            if(fields.length === 0) {
                this.fields = clonedDefaults;
            } else {
                fields.forEach((field) => {
                    if(clonedDefaults[field] !== undefined) {
                        this.fields[field] = clonedDefaults[field];
                    }
                })
            }
        },

        clearErrors(...fields) {
            if(fields.length === 0) {
                this.errors = {};
            } else {
                fields.forEach((field) => delete this.errors[field]);
            }
            this.hasErrors = Object.keys(this.errors).length > 0;
        },

        setErrors(errors) {
            this.errors = {

                ...this.errors,
                ...errors,
            }
        },
    })

    watch(
        () => form.fields,
        () => {
            form.dirty = !isEqual(form.fields, defaults);
        },
        { immediate: true, deep: true }
    )

    return form;
}