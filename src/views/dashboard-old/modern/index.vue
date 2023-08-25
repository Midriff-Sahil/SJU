<script setup lang="ts">
/*Call Components*/
import Topcards from "../dashboardComponents/modern/TopCards.vue";
import ApexColumnChart from "../dashboardComponents/modern/ApexColumnChart.vue";
import RevenueUpdates from "../dashboardComponents/modern/RevenueUpdates.vue";
import YearlyBreakup from "../dashboardComponents/modern/YearlyBreakup.vue";
import MonthlyEarnings from "../dashboardComponents/modern/MonthlyEarnings.vue";
import EmployeeSalary from "../dashboardComponents/modern/EmployeeSalary.vue";
import Customers from "../dashboardComponents/modern/Customers.vue";
import Projects from "../dashboardComponents/modern/Projects.vue";
import UserCard from "../dashboardComponents/modern/UserCard.vue";
import BestSellingProducts from "../dashboardComponents/modern/BestSellingProducts.vue";
import WeeklyStats from "../dashboardComponents/modern/WeeklyStats.vue";
import TopProjects from "../dashboardComponents/modern/TopProjects.vue";
import {notifications} from '@/_mockApis/headerData';

</script>
<template>
    <v-row>
        <!-- Top cards -->
        <v-col cols="12">
            <Topcards/>
        </v-col> 
         <v-col cols="12">
           <v-row>
                <v-col cols="12" lg="8" md="7">
                    <v-card elevation="10" >
                        <v-card-text>
                            <h2 class="v-card-title text-h5">Yearly Earning</h2>
                            <ApexColumnChart/>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="5">
                    <v-card elevation="10">
                        <v-card-text  class="pa-0">
                            <h2 class="v-card-title text-h5 pa-6 pb-3">Notice Board</h2>
                            <perfect-scrollbar style="height:400px">
                                <v-list class="py-0 theme-list" lines="two">
                                    <v-list-item v-for="item in notifications" :key="item.title" :value="item" active-color="primary" class="py-4 px-8">
                                        <!-- <template v-slot:prepend>
                                            <v-avatar size="48" class="mr-3">
                                                <v-img :src="item.avatar" width="48" :alt="item.avatar" />
                                            </v-avatar>
                                        </template> -->
                                        <template v-slot:prepend>
                                            <v-avatar size="48" class="align-start mr-3">
                                                    <img src="@/assets/images/sju/sju-dummy.jpg" width="48" alt="avatar" />
                                            </v-avatar>
                                        </template>
                                        <div>
                                            <h6 class="text-subtitle-1 font-weight-bold mb-1">{{ item.title }}</h6>
                                        </div>
                                        <p class="text-subtitle-1 font-weight-regular mb-2 textSecondary">{{ item.subtitle }}</p>
                                        <p class="text-subtitle-2 font-weight-regular textSecondary">2-Aug-2023 | 04.00pm</p>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                </v-list>
                            </perfect-scrollbar>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <TopProjects/>
                </v-col>
                <!-- <v-col cols="12" lg="4" md="4">
                    <WeeklyStats/>
                </v-col> -->
                <!-- Revenue Updates -->
                <!-- <v-col cols="12" lg="8" md="12">
                    <RevenueUpdates/>
                </v-col> -->
                <!-- Yearly Breakup / Monthly Earnings -->
                <!-- <v-col cols="12" lg="4" sm="12">
                    <v-row>
                        <v-col cols="12" lg="12" sm="6">
                            <YearlyBreakup/>
                        </v-col>
                        <v-col cols="12" lg="12" sm="6">
                            <MonthlyEarnings/>
                        </v-col>
                    </v-row>
                </v-col> -->
                <!-- Employee Salary -->    
                <!-- <v-col cols="12" lg="4" md="4">
                    <EmployeeSalary/>
                </v-col> -->
                <!-- Customers / Projects / Usercard -->    
                <!-- <v-col cols="12" lg="4" md="4">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <Customers/>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <Projects/>
                        </v-col>
                        <v-col cols="12">
                            <UserCard/>
                        </v-col>
                    </v-row>
                </v-col> -->
                <!--Best selling products-->    
                <!-- <v-col cols="12" lg="4" md="4">
                    <BestSellingProducts/>
                </v-col> -->
                <!-- Weekly Stats -->
                
                <!-- Top Projects -->
                <!-- <v-col cols="12" lg="8" md="8">
                    <TopProjects/>
                </v-col> -->
           </v-row>
        </v-col>    
    </v-row>
</template>