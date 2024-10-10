/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { Member } from '@/types/Member'
import { Address } from '@/types/Address'

export const useMemberCreationForm = defineStore('memberCreationForm', () => {

    let defaultForm: Member = reactive<Member>({
        firstname: '',
        lastname: '',
        dateBirth: '',
        birthCountry: '',
        gender: '',
        nationality: '',
        email: '',
        phoneNumber: '',
        phoneIndicator: '',
        address: {
            doorNumber: '',
            streetName: '',
            complementaryAdressInfo: '',
            city: '',
            zipCode: '',
            region: '',
            country: ''
        }
    })

    const updatedForm = computed(() => defaultForm)

    function $reset() {
        defaultForm = {
            firstname: '',
            lastname: '',
            dateBirth: '',
            birthCountry: '',
            gender: '',
            nationality: '',
            email: '',
            phoneNumber: '',
            phoneIndicator: '',
            address: {
                doorNumber: '',
                streetName: '',
                complementaryAdressInfo: '',
                city: '',
                zipCode: '',
                region: '',
                country: ''
            }
        }
    }

    function createMember() {

    }

    return { defaultForm, updatedForm, $reset }
})
