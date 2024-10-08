/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useMemberCreationForm = defineStore('memberCreationForm', () => {

    // state: () => {
    //     return {
    //         defaultForm: {
    //             firstname: "",
    //             lastname: "",
    //             dateBirth: "",
    //             birthCountry: "",
    //             gender: "",
    //             nationality: ""
    //         }
    //     }
    // }
    
    let defaultForm = reactive({
        firstname: "",
        lastname: "",
        dateBirth: "",
        birthCountry: "",
        gender: "",
        nationality: ""
    })

    const updatedForm = computed(() => defaultForm)

    function $reset() {
        console.log("reset form")
        defaultForm = reactive({
            firstname: "",
            lastname: "",
            dateBirth: "",
            birthCountry: "",
            gender: "",
            nationality: ""
        })
    }

    return { defaultForm, updatedForm, $reset }
})
