/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { Member } from '@/types/Member'

export const useMember = defineStore('member', () => {

    //state

    const defaultMember: Member = reactive<Member>({
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

    let allMembers: Array<Member> = reactive<Array<Member>>([])

    // getters

    const getMember = computed(() => defaultMember);

    const getAllMembers = computed(() => allMembers);

    // actions

    function $reset() {
        Object.assign(defaultMember, {
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
    }



    function $saveMember() {
        allMembers.push({ ...getMember.value });
        localStorage.setItem('all-members', JSON.stringify(allMembers))
    }

    function $getAllMember() {

        const strObj = localStorage.getItem('all-members');

        if (!strObj) {
            return [];
        }

        try {
            const parsedMembers = JSON.parse(strObj);
            allMembers = parsedMembers
        } catch (error) {
            console.error("Error parsing 'all-members' from localStorage", error);
            return [];
        }
    }

    return { defaultMember, getMember, $reset, $getAllMember, $saveMember, getAllMembers }
})
