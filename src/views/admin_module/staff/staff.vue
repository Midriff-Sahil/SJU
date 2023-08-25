<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useContactStore } from '@/stores/apps/contact';
// import { VDataTable } from 'vuetify/labs/VDataTable'

import adminStaff from '@/_mockApis/apps/adminStaff';

const store = useContactStore();

onMounted(() => {
    store.fetchContacts();
});
const getContacts: any = computed(() => {
    return store.contacts;
});
const itemsPerPage = 10; 
const currentPage = ref(1);


const valid = ref(true);
const dialog = ref(false);
const search = ref('');
const desserts = ref(adminStaff);
const editedIndex = ref(-1);
const editedItem = ref({
    id: '',
    userinfo: '',
    usermail: '',
    phone: '',
    password:'admin@12344',
});
const defaultItem = ref({
    id: '',
    userinfo: '',
    usermail: '',
    phone: '',
    password:'',
});

//Methods
const filteredList = computed(() => {
    return desserts.value.filter((user: any) => {
        return user.userinfo.toLowerCase().includes(search.value.toLowerCase());
    });
});
const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredList.value.slice(start, end);
});

function editItem(item: any) {
    editedIndex.value = desserts.value.indexOf(item);
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
}
function deleteItem(item: any) {
    const index = desserts.value.indexOf(item);
    confirm('Are you sure you want to delete this item?') && desserts.value.splice(index, 1);
}

function close() {
    dialog.value = false;
    setTimeout(() => {
        editedItem.value = Object.assign({}, defaultItem.value);
        editedIndex.value = -1;
    }, 300);
}
function save() {
    if (editedIndex.value > -1) {
        Object.assign(desserts.value[editedIndex.value], editedItem.value);
    } else {
        desserts.value.push(editedItem.value);
    }
    close();
}

//Computed Property
const formTitle = computed(() => {
    return editedIndex.value === -1 ? 'Add Staff' : 'Edit Staff';
});
</script>
<template>
    <v-row>
        <v-col cols="12" lg="4" md="6">
            <v-text-field density="compact" v-model="search" label="Search Staff" hide-details variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog" max-width="500">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props" flat class="ml-auto">
                        <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Add Staff
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="pa-4 bg-secondary">
                        <span class="title text-white">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field variant="outlined" hide-details v-model="editedItem.id" label="Id"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        variant="outlined"
                                        hide-details
                                        v-model="editedItem.userinfo"
                                        label="Name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        variant="outlined"
                                        hide-details
                                        v-model="editedItem.phone"
                                        label="Phone"
                                        type="phone"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        variant="outlined"
                                        hide-details
                                        v-model="editedItem.usermail"
                                        label="Email"
                                        type="email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12">
                                    <v-text-field
                                        variant="outlined"
                                        hide-details
                                        v-model="editedItem.password"
                                        label="Password"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>

                    <v-card-actions class="pa-4">
                        <v-spacer></v-spacer>
                        <v-btn color="error" @click="close">Cancel</v-btn>
                        <v-btn
                            color="secondary"
                            :disabled="editedItem.userinfo == '' || editedItem.usermail == ''"
                            variant="flat"
                            @click="save"
                            >Save</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
    <v-table class="mt-5">
        <thead>
            <tr>
                <th class="text-subtitle-1 font-weight-semibold">Id</th>
                <th class="text-subtitle-1 font-weight-semibold">Name</th>
                <th class="text-subtitle-1 font-weight-semibold">Email</th>
                <th class="text-subtitle-1 font-weight-semibold">Phone</th>
                <th class="text-subtitle-1 font-weight-semibold">Status</th>
                <th class="text-subtitle-1 font-weight-semibold">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in paginatedList" :key="item.id" :currentPage="currentPage"  :pageSize="10">
                <td class="text-subtitle-1">{{ item.id }}</td>
                <td>
                    <h4 class="text-h6 font-weight-semibold">{{ item.userinfo }}</h4>
                </td>
                <td class="text-subtitle-1">{{ item.usermail }}</td>
                <td class="text-subtitle-1">{{ item.phone }}</td>
                <td>
                    <v-switch
                        color="primary"
                        :model-value="item.status"
                        :class="item.status==true?'text-primary':'text-error'"
                        :label="item.status==true?'Active':'Inactive'"
                        @click="item.status==false?item.status=true:item.status=false"
                        hide-details inset
                    ></v-switch>
                </td>
                <td>
                    <div class="d-flex align-center" color="primary">
                        <v-tooltip text="Edit" class="text-primary" color="white">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="editItem(item)" v-bind="props"
                                    ><PencilIcon stroke-width="1.5" size="20" class="text-primary"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                        <v-tooltip text="Delete">
                            <template v-slot:activator="{ props }">
                                <v-btn icon flat @click="deleteItem(item)" v-bind="props"
                                    ><TrashIcon stroke-width="1.5" size="20" class="text-error"
                                /></v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </td>
            </tr>
        </tbody>
    </v-table>
    
    <v-pagination v-model="currentPage" :length="Math.ceil(filteredList.length / itemsPerPage)" rounded="circle"></v-pagination>
</template>
