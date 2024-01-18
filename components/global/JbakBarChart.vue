<template>
  <Bar
    v-if="chartData"
    id="my-chart"
    class="h-full w-full"
    :options="chartOptions"
    :data="chartData"
  />
</template>
  
<script lang="ts">
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

  const { getBaseOptions } = chartConfig();
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


  export default {
    components: { Bar },
    props: {
        chartData: null
    },
    data() {
      return {
        chartOptions: getBaseOptions()
      }
    }
  }
</script>