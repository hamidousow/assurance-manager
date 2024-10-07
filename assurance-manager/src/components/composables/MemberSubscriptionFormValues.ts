import { reactive } from "vue";

export default function useForm() {
    const values = reactive({
        firstname : '',
        lastname: '',
        email: '',
        dateBirth: ''
    })

    return {
        values
    }
}