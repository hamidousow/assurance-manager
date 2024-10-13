/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Member } from '@/types/Member'
import { genUniqueId } from '@/utils/uniqueIdGenerator'


export const useMember = defineStore('member', () => {

    //state

    const defaultMember: Member = reactive<Member>({
        id: '',
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
            id: '',
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

    function $saveMember(member: Member) {
        member.id = genUniqueId();
        allMembers.push({ ...member });
        localStorage.setItem('all-members', JSON.stringify(allMembers));
        $getAllMembers()
    }

    function $getAllMembers() {

        const strObj = localStorage.getItem('all-members');

        if (!strObj) {
            return [];
        }

        try {
            const parsedMembers = JSON.parse(strObj);
            allMembers.splice(0, allMembers.length, ...parsedMembers);
        } catch (error) {
            console.error("Error parsing 'all-members' from localStorage", error);
            return [];
        }
    }

    function $findMemberById(id: string) { 

        const strObj = localStorage.getItem('all-members');
        

        if(!strObj) {
            return []
        }

        try {
            allMembers = JSON.parse(strObj);
            const memberFind = getAllMembers.value.find((member) => member.id == id);
            if(memberFind) {
                Object.assign(defaultMember, memberFind);
            }
        } catch(error) {
            console.error(error)
        }
    }

    return { defaultMember, getMember, $reset, $getAllMembers, $saveMember, getAllMembers, $findMemberById }
})
