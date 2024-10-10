<script lang="ts" setup>

</script>
<template>
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="select-all-members" />
                </th>
                <th> id </th>
                <th> nom </th>
                <th> prénom </th>
                <th> type contrat </th>
                <th> status échéance </th>
            </tr>
        </thead>
        <tbody>
            
            <tr>
                <td data-name="selected"><input type="checkbox" name="member" /></td>
                <td data-name="id">2</td>
                <td data-name="lastname">sow</td>
                <td data-name="firstname">Hamidou</td>
                <td data-name="contract">Jeune</td>
                <td data-name="status">
                    <div class="dot"></div> 
                    <span>À jour</span>
                </td>
            </tr>
            <tr>
                <td data-name="selected"><input type="checkbox" name="member" /></td>
                <td data-name="id">2</td>
                <td data-name="lastname">sow</td>
                <td data-name="firstname">Hamidou</td>
                <td data-name="contract">Jeune</td>
                <td data-name="status">
                    <div class="dot"></div> 
                    <span>À jour</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>
table {
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    border: none;

}

table th {
    background: rgb(238, 238, 238);
    background: linear-gradient(180deg, rgba(238, 238, 238, 1) 0%, rgba(238, 238, 238, 0) 100%);
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.4rem;
}

table td {
    background: var(--clr-white);
    text-transform: capitalize;
    padding: .8rem 1.4rem;
}

td[data-name="status"] {
    display: flex;
    flex-direction: row;
    place-items: center;
    gap: .5rem;
}

.dot {
    background-color: var(--color-green-status);
    width: 8px;
    height: 8px;
    border-radius: 100%;
}
</style>