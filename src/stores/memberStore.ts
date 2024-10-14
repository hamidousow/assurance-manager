/* eslint-disable no-unused-labels */
import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Member } from '@/types/Member'
import { genUniqueId } from '@/utils/uniqueIdGenerator'
import { confirmAction } from '@/utils/confirm'


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

    const allMembers: Member[] = reactive<Member[]>([]);
    const indexMember = ref(0);

    // getters

    const getMember = computed(() => defaultMember);

    const getAllMembers = computed(() => allMembers);

    const getIndexMember = computed(() => indexMember);

    // actions

    

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
            $getAllMembers();
            const memberFind = getAllMembers.value.find((member) => member.id == id);
            if(memberFind) {
                Object.assign(defaultMember, memberFind);
                console.log(defaultMember)
            }
        } catch(error) {
            console.error(error)
        }
    }

    async function $updateMember(index: number) {
        if(!getMember.value) {
            console.log('empty object, no data.')
            return {}
        } 

        try {
            allMembers.splice(index, 1, getMember.value);
            localStorage.setItem('all-members', JSON.stringify(allMembers));            
        } catch(error) {
            console.log('une erreur est survenue lors de la sauvegarde. ' + error)
        }
        $getAllMembers();
        // $reset()        
    }

    function $updateIndex(index: number) {
        indexMember.value = index;
    }

    function $deleteMemberByIndex(index: number) {
        if(!getMember.value) {
            console.log('empty object, no data.')
            return {}
        } 

        const response = confirmAction('Confirmer la suppression ?');

        if(!response.isConfirmed) {
            console.log(response.returnMsg)
            return
        }

        try {
            
            allMembers.splice(index, 1);
            localStorage.setItem('all-members', JSON.stringify(allMembers));
            $getAllMembers()
            
        } catch(error) {
            console.log('une erreur est survenue lors de la sauvegarde. ' + error)
        }
        
        $reset()
    }

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

    return { 
        getMember,
        getAllMembers, 
        getIndexMember,
        $reset, 
        $getAllMembers, 
        $saveMember, 
        $findMemberById,
        $updateMember,
        $updateIndex,
        $deleteMemberByIndex
    }
})
