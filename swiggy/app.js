// Swiggy Financial Analytics Dashboard JavaScript

// Application data from the provided JSON
const appData = {
  financial_performance: [
    {"Date": "2024-12-01", "Total_Orders": 110817800, "Total_Revenue": 12514057261, "Commission_Revenue": 7508434357, "Delivery_Revenue": 2770445000, "Advertising_Revenue": 1126265153, "Subscription_Revenue": 664085384, "Instamart_Revenue": 444827367, "EBITDA": -1143837963, "EBITDA_Margin": -0.087, "Active_Customers": 36921248, "Average_Order_Value": 286},
    {"Date": "2024-11-01", "Total_Orders": 108432156, "Total_Revenue": 12187432891, "Commission_Revenue": 7312459734, "Delivery_Revenue": 2710804000, "Advertising_Revenue": 1097115933, "Subscription_Revenue": 649268169, "Instamart_Revenue": 417785055, "EBITDA": -1087234156, "EBITDA_Margin": -0.089, "Active_Customers": 35893542, "Average_Order_Value": 282}
  ],
  city_performance: [
    {"City": "Mumbai", "Orders": 16622670, "Revenue": 1877108589, "Active_Customers": 5538372, "Avg_Delivery_Time": 28.5, "Customer_Satisfaction": 4.15, "Market_Share": 15.0},
    {"City": "Delhi", "Orders": 15565002, "Revenue": 1752267832, "Active_Customers": 5188687, "Avg_Delivery_Time": 29.2, "Customer_Satisfaction": 4.08, "Market_Share": 14.1},
    {"City": "Bangalore", "Orders": 13298136, "Revenue": 1501680831, "Active_Customers": 4432712, "Avg_Delivery_Time": 26.8, "Customer_Satisfaction": 4.35, "Market_Share": 12.0},
    {"City": "Hyderabad", "Orders": 12983445, "Revenue": 1465436923, "Active_Customers": 4327815, "Avg_Delivery_Time": 25.9, "Customer_Satisfaction": 4.22, "Market_Share": 11.7},
    {"City": "Chennai", "Orders": 11540334, "Revenue": 1302540734, "Active_Customers": 3846778, "Avg_Delivery_Time": 27.1, "Customer_Satisfaction": 4.18, "Market_Share": 10.4}
  ],
  restaurant_categories: [
    {"Category": "Indian", "Total_Restaurants": 3600, "Avg_Commission_Rate": 0.22, "Avg_Monthly_Orders": 520, "Avg_Rating": 4.1},
    {"Category": "Fast Food", "Total_Restaurants": 3450, "Avg_Commission_Rate": 0.25, "Avg_Monthly_Orders": 680, "Avg_Rating": 3.9},
    {"Category": "Biryani", "Total_Restaurants": 3320, "Avg_Commission_Rate": 0.21, "Avg_Monthly_Orders": 580, "Avg_Rating": 4.3},
    {"Category": "Chinese", "Total_Restaurants": 2890, "Avg_Commission_Rate": 0.23, "Avg_Monthly_Orders": 420, "Avg_Rating": 4.0},
    {"Category": "Pizza", "Total_Restaurants": 1950, "Avg_Commission_Rate": 0.26, "Avg_Monthly_Orders": 490, "Avg_Rating": 4.2}
  ],
  operational_kpis: [
    {"Metric": "Average Delivery Time", "Value": 26.2, "Unit": "minutes", "Benchmark": 30, "Status": "Good"},
    {"Metric": "On-time Delivery Rate", "Value": 89.2, "Unit": "%", "Benchmark": 85, "Status": "Excellent"},
    {"Metric": "Order Accuracy Rate", "Value": 94.8, "Unit": "%", "Benchmark": 95, "Status": "Good"},
    {"Metric": "Customer Satisfaction", "Value": 4.12, "Unit": "/5", "Benchmark": 4.0, "Status": "Good"},
    {"Metric": "Cost per Delivery", "Value": 46.5, "Unit": "₹", "Benchmark": 50, "Status": "Good"},
    {"Metric": "Customer Acquisition Cost", "Value": 185, "Unit": "₹", "Benchmark": 200, "Status": "Good"}
  ],
  competitive_analysis: [
    {"Platform": "Swiggy", "Market_Share": 45.2, "AOV": 286, "Delivery_Time": 26.2, "Customer_Rating": 4.12},
    {"Platform": "Zomato", "Market_Share": 38.5, "AOV": 275, "Delivery_Time": 28.1, "Customer_Rating": 4.05},
    {"Platform": "Others", "Market_Share": 16.3, "AOV": 245, "Delivery_Time": 32.5, "Customer_Rating": 3.85}
  ],
  revenue_streams: [
    {"Stream": "Commission Revenue", "Amount": 7508434357, "Percentage": 60.0, "Color": "#FF5722"},
    {"Stream": "Delivery Revenue", "Amount": 2770445000, "Percentage": 22.1, "Color": "#FF8A50"},
    {"Stream": "Advertising Revenue", "Amount": 1126265153, "Percentage": 9.0, "Color": "#FFB74D"},
    {"Stream": "Subscription Revenue", "Amount": 664085384, "Percentage": 5.3, "Color": "#FFCC80"},
    {"Stream": "Instamart Revenue", "Amount": 444827367, "Percentage": 3.6, "Color": "#FFAB91"}
  ],
  monthly_trends: [
    {"Month": "Jan 2024", "Orders": 95234567, "Revenue": 10845632145},
    {"Month": "Feb 2024", "Orders": 97123456, "Revenue": 11056743298},
    {"Month": "Mar 2024", "Orders": 102456789, "Revenue": 11634521087},
    {"Month": "Apr 2024", "Orders": 98765432, "Revenue": 11234567890},
    {"Month": "May 2024", "Orders": 101234567, "Revenue": 11523456789},
    {"Month": "Jun 2024", "Orders": 105678901, "Revenue": 12034567823},
    {"Month": "Jul 2024", "Orders": 108234567, "Revenue": 12234567845},
    {"Month": "Aug 2024", "Orders": 106789012, "Revenue": 12134523467},
    {"Month": "Sep 2024", "Orders": 107456789, "Revenue": 12234567812},
    {"Month": "Oct 2024", "Orders": 109876543, "Revenue": 12456789023},
    {"Month": "Nov 2024", "Orders": 108432156, "Revenue": 12187432891},
    {"Month": "Dec 2024", "Orders": 110817800, "Revenue": 12514057261}
  ]
};

// Chart instances
let charts = {};

// Current active section
let currentSection = 'overview';

// Utility functions
function formatNumber(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
  return num.toString();
}

function formatCurrency(num) {
  return '₹' + formatNumber(num);
}

function formatPercentage(num) {
  return (num * 100).toFixed(1) + '%';
}

function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  };
  document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-IN', options) + ' IST';
}

function updateOrdersPerMinute() {
  const ordersPerMin = Math.floor(Math.random() * 50) + 100; // Random between 100-150
  document.getElementById('ordersPerMinute').textContent = ordersPerMin;
}

// Navigation functionality - Fixed
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetSection = item.dataset.section;
      
      // Don't do anything if already on this section
      if (targetSection === currentSection) return;

      // Update active nav item
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update active section with proper timing
      sections.forEach(section => {
        section.classList.remove('active');
      });
      
      // Small delay to ensure clean transition
      setTimeout(() => {
        const targetSectionElement = document.getElementById(targetSection);
        if (targetSectionElement) {
          targetSectionElement.classList.add('active');
          currentSection = targetSection;
          
          // Initialize charts for the active section
          setTimeout(() => {
            initSectionCharts(targetSection);
          }, 100);
        }
      }, 50);
    });
  });
}

// Initialize charts for specific sections
function initSectionCharts(section) {
  try {
    switch(section) {
      case 'overview':
        initOverviewCharts();
        populateCitiesTable();
        break;
      case 'financial':
        initFinancialCharts();
        break;
      case 'cities':
        initCityCharts();
        break;
      case 'restaurants':
        initRestaurantCharts();
        break;
      case 'operations':
        initOperationsCharts();
        populateOperationalMetrics();
        break;
      case 'competitive':
        initCompetitiveCharts();
        populateCompetitiveTable();
        break;
    }
  } catch (error) {
    console.error(`Error initializing ${section} charts:`, error);
  }
}

// Overview Charts
function initOverviewCharts() {
  // Revenue Breakdown Pie Chart
  if (charts.revenueBreakdown) {
    charts.revenueBreakdown.destroy();
  }
  
  const revenueCanvas = document.getElementById('revenueBreakdownChart');
  if (!revenueCanvas) return;
  
  const revenueCtx = revenueCanvas.getContext('2d');
  charts.revenueBreakdown = new Chart(revenueCtx, {
    type: 'doughnut',
    data: {
      labels: appData.revenue_streams.map(s => s.Stream),
      datasets: [{
        data: appData.revenue_streams.map(s => s.Percentage),
        backgroundColor: appData.revenue_streams.map(s => s.Color),
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const stream = appData.revenue_streams[context.dataIndex];
              return `${stream.Stream}: ${formatCurrency(stream.Amount)} (${stream.Percentage}%)`;
            }
          }
        }
      }
    }
  });

  // Monthly Trends Chart
  if (charts.monthlyTrends) {
    charts.monthlyTrends.destroy();
  }
  
  const trendsCanvas = document.getElementById('monthlyTrendsChart');
  if (!trendsCanvas) return;
  
  const trendsCtx = trendsCanvas.getContext('2d');
  charts.monthlyTrends = new Chart(trendsCtx, {
    type: 'line',
    data: {
      labels: appData.monthly_trends.map(t => t.Month.split(' ')[0]),
      datasets: [{
        label: 'Orders (M)',
        data: appData.monthly_trends.map(t => t.Orders / 1000000),
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.1)',
        tension: 0.4,
        yAxisID: 'y'
      }, {
        label: 'Revenue (B)',
        data: appData.monthly_trends.map(t => t.Revenue / 1000000000),
        borderColor: '#FF8A50',
        backgroundColor: 'rgba(255, 138, 80, 0.1)',
        tension: 0.4,
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Orders (Millions)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Revenue (Billions ₹)'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
}

// Financial Performance Charts
function initFinancialCharts() {
  if (charts.financial) {
    charts.financial.destroy();
  }
  
  const financialCanvas = document.getElementById('financialChart');
  if (!financialCanvas) return;
  
  const financialCtx = financialCanvas.getContext('2d');
  const currentData = appData.financial_performance[0];
  
  charts.financial = new Chart(financialCtx, {
    type: 'bar',
    data: {
      labels: ['Commission', 'Delivery', 'Advertising', 'Subscription', 'Instamart'],
      datasets: [{
        label: 'Revenue (₹B)',
        data: [
          currentData.Commission_Revenue / 1e9,
          currentData.Delivery_Revenue / 1e9,
          currentData.Advertising_Revenue / 1e9,
          currentData.Subscription_Revenue / 1e9,
          currentData.Instamart_Revenue / 1e9
        ],
        backgroundColor: ['#FF5722', '#FF8A50', '#FFB74D', '#FFCC80', '#FFAB91'],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Revenue (Billions ₹)'
          }
        }
      }
    }
  });
}

// City Analytics Charts
function initCityCharts() {
  if (charts.city) {
    charts.city.destroy();
  }
  
  const cityCanvas = document.getElementById('cityChart');
  if (!cityCanvas) return;
  
  const cityCtx = cityCanvas.getContext('2d');
  charts.city = new Chart(cityCtx, {
    type: 'bar',
    data: {
      labels: appData.city_performance.map(c => c.City),
      datasets: [{
        label: 'Orders (M)',
        data: appData.city_performance.map(c => c.Orders / 1000000),
        backgroundColor: '#FF5722',
        yAxisID: 'y'
      }, {
        label: 'Revenue (₹B)',
        data: appData.city_performance.map(c => c.Revenue / 1000000000),
        backgroundColor: '#FF8A50',
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Orders (Millions)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Revenue (Billions ₹)'
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });
}

// Restaurant Charts
function initRestaurantCharts() {
  if (charts.restaurant) {
    charts.restaurant.destroy();
  }
  
  const restaurantCanvas = document.getElementById('restaurantChart');
  if (!restaurantCanvas) return;
  
  const restaurantCtx = restaurantCanvas.getContext('2d');
  charts.restaurant = new Chart(restaurantCtx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Restaurant Categories',
        data: appData.restaurant_categories.map(cat => ({
          x: cat.Avg_Monthly_Orders,
          y: cat.Avg_Commission_Rate * 100,
          r: cat.Total_Restaurants / 100
        })),
        backgroundColor: ['#FF5722', '#FF8A50', '#FFB74D', '#FFCC80', '#FFAB91']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Average Monthly Orders'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Commission Rate (%)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const index = context.dataIndex;
              const cat = appData.restaurant_categories[index];
              return `${cat.Category}: ${cat.Avg_Monthly_Orders} orders, ${(cat.Avg_Commission_Rate * 100).toFixed(1)}% commission, ${cat.Total_Restaurants} restaurants`;
            }
          }
        }
      }
    }
  });
}

// Operations Charts
function initOperationsCharts() {
  if (charts.operations) {
    charts.operations.destroy();
  }
  
  const operationsCanvas = document.getElementById('operationsChart');
  if (!operationsCanvas) return;
  
  const operationsCtx = operationsCanvas.getContext('2d');
  charts.operations = new Chart(operationsCtx, {
    type: 'radar',
    data: {
      labels: appData.operational_kpis.map(kpi => kpi.Metric.replace(' ', '\n')),
      datasets: [{
        label: 'Current Performance',
        data: appData.operational_kpis.map(kpi => {
          // Normalize values for radar chart
          if (kpi.Unit === 'minutes') return (50 - kpi.Value) * 2; // Invert for delivery time
          if (kpi.Unit === '%') return kpi.Value;
          if (kpi.Unit === '/5') return kpi.Value * 20;
          if (kpi.Unit === '₹') return (250 - kpi.Value) / 2.5; // Invert for cost
          return kpi.Value;
        }),
        borderColor: '#FF5722',
        backgroundColor: 'rgba(255, 87, 34, 0.2)',
        borderWidth: 2
      }, {
        label: 'Benchmark',
        data: appData.operational_kpis.map(kpi => {
          // Normalize benchmark values
          if (kpi.Unit === 'minutes') return (50 - kpi.Benchmark) * 2;
          if (kpi.Unit === '%') return kpi.Benchmark;
          if (kpi.Unit === '/5') return kpi.Benchmark * 20;
          if (kpi.Unit === '₹') return (250 - kpi.Benchmark) / 2.5;
          return kpi.Benchmark;
        }),
        borderColor: '#666',
        backgroundColor: 'rgba(102, 102, 102, 0.1)',
        borderWidth: 1,
        borderDash: [5, 5]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Competitive Analysis Charts
function initCompetitiveCharts() {
  if (charts.competitive) {
    charts.competitive.destroy();
  }
  
  const competitiveCanvas = document.getElementById('competitiveChart');
  if (!competitiveCanvas) return;
  
  const competitiveCtx = competitiveCanvas.getContext('2d');
  charts.competitive = new Chart(competitiveCtx, {
    type: 'pie',
    data: {
      labels: appData.competitive_analysis.map(c => c.Platform),
      datasets: [{
        data: appData.competitive_analysis.map(c => c.Market_Share),
        backgroundColor: ['#FF5722', '#FF8A50', '#FFB74D'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed}%`;
            }
          }
        }
      }
    }
  });
}

// Populate data tables
function populateCitiesTable() {
  const tbody = document.getElementById('citiesTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  appData.city_performance.forEach(city => {
    const row = tbody.insertRow();
    row.innerHTML = `
      <td><strong>${city.City}</strong></td>
      <td>${formatNumber(city.Orders)}</td>
      <td>${formatCurrency(city.Revenue)}</td>
      <td>${city.Avg_Delivery_Time} min</td>
      <td>${city.Customer_Satisfaction}/5</td>
      <td>${city.Market_Share}%</td>
    `;
  });
}

function populateCompetitiveTable() {
  const tbody = document.getElementById('competitiveTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  appData.competitive_analysis.forEach(platform => {
    const row = tbody.insertRow();
    const isSwiggy = platform.Platform === 'Swiggy';
    row.innerHTML = `
      <td><strong${isSwiggy ? ' style="color: #FF5722;"' : ''}>${platform.Platform}</strong></td>
      <td${isSwiggy ? ' style="color: #FF5722; font-weight: bold;"' : ''}>${platform.Market_Share}%</td>
      <td>${formatCurrency(platform.AOV)}</td>
      <td>${platform.Delivery_Time} min</td>
      <td>${platform.Customer_Rating}/5</td>
    `;
  });
}

function populateOperationalMetrics() {
  const container = document.getElementById('operationalMetrics');
  if (!container) return;
  
  container.innerHTML = '';
  
  appData.operational_kpis.forEach(kpi => {
    const metricDiv = document.createElement('div');
    metricDiv.className = `operational-metric ${kpi.Status.toLowerCase()}`;
    metricDiv.innerHTML = `
      <h4>${kpi.Metric}</h4>
      <div class="value">${kpi.Value}${kpi.Unit}</div>
      <div class="benchmark">Target: ${kpi.Benchmark}${kpi.Unit}</div>
    `;
    container.appendChild(metricDiv);
  });
}

// Real-time updates simulation
function simulateRealTimeUpdates() {
  setInterval(() => {
    updateOrdersPerMinute();
    
    // Simulate small changes in KPI values
    const elements = {
      'totalOrders': () => '110.' + (8 + Math.random() * 2).toFixed(1) + 'M',
      'grossOrderValue': () => '₹12.' + (51 + Math.random() * 0.1).toFixed(2) + 'B',
      'totalRevenue': () => '₹12.' + (51 + Math.random() * 0.1).toFixed(2) + 'B',
      'activeCustomers': () => '36.' + (9 + Math.random() * 0.2).toFixed(1) + 'M',
      'averageOrderValue': () => '₹' + (286 + Math.random() * 10 - 5).toFixed(0)
    };
    
    Object.entries(elements).forEach(([id, generator]) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = generator();
      }
    });
  }, 10000); // Update every 10 seconds
}

// Initialize the dashboard
function initDashboard() {
  updateDateTime();
  initNavigation();
  
  // Initialize overview section by default
  setTimeout(() => {
    initOverviewCharts();
    populateCitiesTable();
  }, 100);
  
  simulateRealTimeUpdates();
  
  // Update date/time every minute
  setInterval(updateDateTime, 60000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);