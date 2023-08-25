<script setup lang="ts">
import { ref } from 'vue';
import {UserCircleIcon, BrandYoutubeIcon, EyeIcon} from 'vue-tabler-icons';
import {topProjectsData} from '@/_mockApis/components/dashboard/modernData';
const select = ref('March 2023');
const items = ref(['March 2023', 'April 2023', 'May 2023']);
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <div>
                    <v-card-title class="text-h5">Our Top Programs</v-card-title>
                    <!-- <v-card-subtitle class="text-subtitle-1 textSecondary">Best Programs</v-card-subtitle> -->
                </div>
            </div>
            <v-table class="month-table mt-6">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-subtitle-1 textPrimary font-weight-bold">Program Name</th>
                            <th class="text-subtitle-1 textPrimary font-weight-bold">Total Videos</th>
                            <th class="text-subtitle-1 textPrimary font-weight-bold">Amount</th>
                            <th class="text-subtitle-1 textPrimary font-weight-bold">Total Subscription</th>
                            <th class="text-subtitle-1 textPrimary font-weight-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in topProjectsData" :key="item.programname" :class="item.activestate" class="month-item">
                            <td>
                                <h4 class="text-subtitle-1  font-weight-regular"> {{ item.programname }}</h4>
                            </td>
                            <td>
                                <h4 class="text-subtitle-1  font-weight-regular d-flex align-center"> <BrandYoutubeIcon size="20" class="text-primary me-1"/> {{ item.videosCount }}</h4>
                            </td>
                            <td>
                                <h4 class="text-subtitle-1  font-weight-regular"> {{ item.programAmount }}</h4>
                            </td>
                            <td>
                                <h4 class="text-subtitle-1  font-weight-regular d-flex align-center"> <UserCircleIcon size="20" class="text-primary me-1"/> {{ item.totalSubscription }}</h4>
                            </td>
                            <td>
                               <router-link to="/"><EyeIcon size="20" class="text-primary me-1"/></router-link>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-table>
        </v-card-item>
    </v-card>
</template>
