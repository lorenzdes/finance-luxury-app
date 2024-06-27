<template>
    <v-container>
      <h1>Financial Planning</h1>
  
      <!-- Budget Calculator -->
      <v-card>
        <v-card-title>Budget Calculator</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="income" label="Monthly Income" type="number"></v-text-field>
            <v-text-field v-model="expenses" label="Monthly Expenses" type="number"></v-text-field>
            <v-btn color="primary" @click="calculateBudget">Calculate</v-btn>
            <div v-if="budget !== null">
              <p>Your monthly budget surplus/deficit is: <strong>{{ budget }}</strong></p>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
  
      <!-- Savings Goal Tracker -->
      <v-card>
        <v-card-title>Savings Goal Tracker</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="savingsGoal" label="Savings Goal" type="number"></v-text-field>
            <v-text-field v-model="currentSavings" label="Current Savings" type="number"></v-text-field>
            <v-text-field v-model="monthlyContribution" label="Monthly Contribution" type="number"></v-text-field>
            <v-btn color="primary" @click="calculateSavingsTime">Calculate</v-btn>
            <div v-if="monthsToGoal !== null">
              <p>You will reach your savings goal in: <strong>{{ monthsToGoal }}</strong> months</p>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
  
      <!-- Investment Calculator -->
      <v-card>
        <v-card-title>Investment Calculator</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field v-model="principal" label="Initial Investment" type="number"></v-text-field>
            <v-text-field v-model="annualRate" label="Annual Interest Rate (%)" type="number"></v-text-field>
            <v-text-field v-model="years" label="Investment Duration (Years)" type="number"></v-text-field>
            <v-btn color="primary" @click="calculateInvestment">Calculate</v-btn>
            <div v-if="futureValue !== null">
              <p>The future value of your investment is: <strong>{{ futureValue }}</strong></p>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Budget Calculator
  const income = ref(0);
  const expenses = ref(0);
  const budget = ref(null);
  
  const calculateBudget = () => {
    budget.value = income.value - expenses.value;
  };
  
  // Savings Goal Tracker
  const savingsGoal = ref(0);
  const currentSavings = ref(0);
  const monthlyContribution = ref(0);
  const monthsToGoal = ref(null);
  
  const calculateSavingsTime = () => {
    if (monthlyContribution.value > 0) {
      monthsToGoal.value = Math.ceil((savingsGoal.value - currentSavings.value) / monthlyContribution.value);
    } else {
      monthsToGoal.value = null;
    }
  };
  
  // Investment Calculator
  const principal = ref(0);
  const annualRate = ref(0);
  const years = ref(0);
  const futureValue = ref(null);
  
  const calculateInvestment = () => {
    futureValue.value = principal.value * Math.pow(1 + annualRate.value / 100, years.value);
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  