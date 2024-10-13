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
    const indexMember = ref(0);

    // getters

    const getMember = computed(() => defaultMember);

    const getAllMembers = computed(() => allMembers);

    const getIndexMember = computed(() => indexMember);

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

    async function $updateMember(index: number) {
        if(!getMember.value) {
            // TODO: remplacer par quelque chose de plus correct
            console.log('empty object, no data.')
            return {}
        } 

        try {
            Object.assign(defaultMember, getMember.value);
            allMembers.splice(index, index, getMember.value);
            console.log(allMembers[index]);
            localStorage.setItem('all-members', JSON.stringify(allMembers));
            
            
        } catch(error) {
            console.log('une erreur est survenue lors de la sauvegarde. ' + error)
        }
    }

    function $updateIndex(index: number) {
        indexMember.value = index;
    }

    return { 
        getMember,
        getAllMembers, 
        getIndexMember,
        $reset, 
        $getAllMembers, 
        $saveMember, 
        $findMemberById,
        $updateMember,
        $updateIndex
    }
})
