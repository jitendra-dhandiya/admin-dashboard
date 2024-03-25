export const visitorsTableHeaders = [
  {
    id: "visitors",
    label: "Visitors",
  },
  {
    id: "location",
    label: "Location",
  },
  {
    id: "device",
    label: "Device",
  },
  {
    id: "premiumUserNo",
    label: "Premium Visitor",
  },
  {
    id: "month",
    label: "Month",
  },
];

export const productTableHeaders = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "month",
    label: "Month",
  },
  {
    id: "price",
    label: "Price",
  },
  {
    id: "sales",
    label: "Sales",
  },
  {
    id: "visitors",
    label: "Visitors",
  },
  {
    id: "revenue",
    label: "Revenue",
  },
];

export const deviceAnalyticsChartOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
  labels: ["Desktop", "Laptop", "Tablet", "Mobile"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

export const visitorAnalyticsChartOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};