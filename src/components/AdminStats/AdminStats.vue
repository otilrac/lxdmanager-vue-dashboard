<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <admin-stats-card
          icon="groups"
          color="brown"
          :value="usersCount"
          unit="users"
          label="User accounts"
          label_sub="Groups"
          :value_sub="groupsCount"
        ></admin-stats-card>
        <admin-stats-card
          icon="mdi-checkbox-multiple-blank"
          color="red"
          :value="machines"
          unit="units"
          label="Instances"
          label_sub="Running"
          :value_sub="runningMachines"
        ></admin-stats-card>
        <admin-stats-card
          v-if="showPrice"
          icon="mdi-currency-eur"
          color="purple"
          :value="priceTotal"
          unit="€"
          label="Price"
          label_sub="Instances with price"
          :value_sub="price"
        ></admin-stats-card>
      </v-layout>
   </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <host-stats-card
          icon="mdi-cpu-64-bit"
          color="green"
          :value="totalCpu"
          unit="cores"
          label="Host CPU"
          :value_sub="vcpus"
          unit_sub="cores"
          label_sub="Allocated CPUs"
        ></host-stats-card>
        <host-stats-card
          icon="mdi-memory"
          color="blue"
          :value="totalMemory"
          :unit="getMemory.limits_unit_show"
          label="Total Memory"
          :value_sub="memory"
          :unit_sub="getMemory.limits_unit_show"
          label_sub="Allocated Memory"
        ></host-stats-card>
        <host-stats-card
          v-if="showDisk"
          icon="mdi-harddisk"
          color="orange"
          :value="totalDisk"
          unit=""
          label="Total Disk"
          :value_sub="disk"
          :unit_sub="getStorage.limits_unit_show"
          label_sub="Allocated Disk"
        ></host-stats-card>
      </v-layout>
   </v-container>
  </div>
</template>

<script>
  import AdminStatsCard from './AdminStatsCard';
  import HostStatsCard from './HostStatsCard';
  import { BToGB, BToGiB, BToMB, BToMiB } from '../../libraries/utils/helpers';
  // import Host from '../../libraries/store/modules/host';

  export default {
    name: 'AdminStats',
    components: {
      'admin-stats-card': AdminStatsCard,
      'host-stats-card': HostStatsCard
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      },
      usersCount() {
        return this.$store.getters.usersTableData.length;
      },
      groupsCount() {
        return this.$store.getters.groupsTableData.length;
      },
      stats() {
        // console.log(this.$store.getters.host);
        return this.$store.getters.stats;
      },
      host() {
        return this.$store.getters.host;
      },
      machines() {
        return this.stats.instances && this.stats.instances.count;
      },
      runningMachines() {
        return this.stats.instances && this.stats.instances.count_running;
      },
      vcpus() {
        return this.stats.cpus && this.stats.cpus.cpus_count;
      },
      memory() {
        if (this.getMemory.limits_unit === 'MiB') {
          return this.stats.memory && BToMiB(this.stats.memory.memory_count_bytes);
        }
        return this.stats.memory && BToMB(this.stats.memory.memory_count_bytes);
      },
      disk() {
        if (this.getStorage.limits_unit === 'GiB') {
          return this.stats.disk && BToGiB(this.stats.disk.disk_count_bytes);
        }
        return this.stats.disk && BToGB(this.stats.disk.disk_count_bytes);
      },
      totalCpu() {
        return this.host.cpu && this.host.cpu.total;
      },
      totalMemory() {
        if (this.getMemory.limits_unit === 'MiB') {
          return this.host.memory && BToMiB(this.host.memory.total);
        }
        return this.host.memory && BToMB(this.host.memory.total);
      },
      totalDisk() {
        return this.$store.getters.appconfig.storage.total_size;
      },
      price() {
        return this.stats.price && this.stats.price.price_count;
      },
      priceTotal() {
        return this.stats.price && this.stats.price.price_total.toFixed(2);
      },
      getMemory() {
        return this.$store.getters.appconfig.memory;
      },
      getStorage() {
        return this.$store.getters.appconfig.storage;
      },
      showPrice() {
        return this.$store.getters.appconfig.price.enabled === 'True';
      },
      showDisk() {
        return this.$store.getters.appconfig.storage.enabled === 'True';
      }
    },
    mounted() {
      // console.log(this.$store.getters.stats);
      // console.log(this.$store.getters['auth/me']);
    },
    created() {
      // this.$store.registerModule('host', Host);
      this.$store.dispatch('fetchStats');
      this.$store.dispatch('fetchUsers');
      this.$store.dispatch('fetchHost');
    }
  };
</script>
