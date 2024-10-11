/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Member } from '@/types/Member'


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
        },
        contract: {
            type: '',
            amount: 0,
            isPaymentComplete: false,
            dateCreation: new Date(Date.now())
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
            },
            contract: {
                type: '',
                amount: 0,
                isPaymentComplete: false,
                dateCreation: new Date(Date.now())
            }
        })
    }



    function $saveMember() {
        allMembers.push({ ...getMember.value });
        localStorage.setItem('all-members', JSON.stringify(allMembers))
    }

    function $getAllMembers() {

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

    return { defaultMember, getMember, $reset, $getAllMembers, $saveMember, getAllMembers }
})
