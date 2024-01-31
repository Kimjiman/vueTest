<template>
    <h1>Chart</h1>
    <div>
        <button @click="changeChart('pie')">파이</button>
        <button @click="changeChart('bar')">바</button>
        <button @click="changeChart('line')">라인</button>
    </div>
    <v-chart class="chart" :option="option" autoresize v-if="data.chart === 'pie'" />
    <v-chart class="chart" :option="option2" autoresize v-if="data.chart === 'bar'" />
    <v-chart class="chart" :option="option3" autoresize v-if="data.chart === 'line'" />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart, LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';
import VChart from 'vue-echarts';
import { reactive, ref } from 'vue';

use([CanvasRenderer, PieChart, BarChart, LineChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent]);

const data = reactive({
    chart: 'pie',
    chartData: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
    ],
});

const option = ref({
    title: {
        text: '파이차트',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
        {
            name: 'Traffic Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: data.chartData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
});

const option2 = ref({
    title: {
        text: '바차트',
        left: 'center',
    },
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        left: 'left',
        orient: 'vertical',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: 'true value',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        },
    ],
});

const option3 = ref({
    title: {
        text: '라인차트',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        left: 'left',
        orient: 'vertical',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: 'true value',
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
        },
    ],
});

const changeChart = async kind => {
    data.chart = kind;
};
</script>
