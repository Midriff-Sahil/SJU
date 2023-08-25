<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
import { ref } from 'vue';


// theme breadcrumb


const theme = useTheme();
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 410,
            fontFamily: `inherit`,
            toolbar: {
              show: false,
            },
        },
        colors: ['#033b4c'],
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '40%'
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
          },
        },
        fill: {
            opacity: 1
        },
       
        tooltip: {
            theme: 'dark',
            y: {
              formatter(val:any) {
                return `$ ${val} thousands`;
              },
            },
        },
        grid: {
          show: false,
        },
        legend: {
          show: true,
          position: 'bottom',
          width: '50px',
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    yaxis: {
                        show: false
                    }
                }
            }
        ]
    };
});

const columnChart = {
    series: [
        {
            name: 'Earning',
            data: [30,44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 66]
        }
    ]
};
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Column Chart -->
    <!-- ---------------------------------------------------- -->
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Column Chart">
                <apexchart type="bar" height="360" :options="chartOptions" :series="columnChart.series"> </apexchart>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
