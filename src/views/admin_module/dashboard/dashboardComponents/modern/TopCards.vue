<script setup lang="ts">
import { topCardsData } from '@/_mockApis/components/dashboard/modernData';
import { DARK_BLUE_THEME } from '@/theme/DarkTheme';

const getBorderStyle = (textcolor: any) => {
  return DARK_BLUE_THEME.colors[ textcolor as keyof typeof DARK_BLUE_THEME.colors]; 
};
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      lg="3"
      md="3"
      sm="6"
      v-for="card in topCardsData"
      :key="card.title"
    >
      <div
        :class="'text-decoration-none rounded-md pa-3 bg-' + card.bgcolor"
      >
        <div class="cardStyleTop align-center" :class="'bg-' + card.bgcolor">
          <div
            class="innerCardImg"
            :style="`border-right: 1px solid ${getBorderStyle(card.textcolor)}`"
          >
            <img :src="card.img" alt="icon" class="iconCardTop" />
          </div>
          <div class="innerCardContent">
            <div
              :class="'text-subtitle-1 text-capitalize font-weight-bold mt-3 text-' + card.textcolor"
              v-text="card.title"
            ></div>
            <h4
              :class="'text-h4 mt-1 text-' + card.textcolor"
              v-text="card.number"
            ></h4>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
