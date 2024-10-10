/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { Member } from '@/types/Member'
import { Address } from '@/types/Address'
import type { ListElement } from '@vueform/vueform'

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

    const allMembers: Array<Member> = reactive<Array<Member>>([])

    const updatedForm = computed(() => defaultForm);
    const allMembersUpdated = computed(() => allMembers);

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

    function $saveMember() {
        allMembersUpdated.value.push(updatedForm.value);
    }

    function $getAllMember() {
        return allMembersUpdated
    }

    return { defaultForm, updatedForm, $reset, $getAllMember, $saveMember, allMembersUpdated }
})
