<template>
  <Line
    v-if="chartData"
    id="my-chart-id"
    class="h-full w-full"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

const { getBaseOptions } = chartConfig();

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default {
  components: { Line },
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