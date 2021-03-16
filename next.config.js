module.exports = {
  assetPrefix: ".",
  env: {
    DATA: {
      METRICS: {
        KPI: {
          median_first_byte_time_ms: {
            KEY: "TTFB",
            LABEL: "≤1.0s (1000ms)",
            VALUE: 1000,
          },
          median_first_contentful_paint_time_ms: {
            KEY: "FCP",
            LABEL: "≤2.0s (2000ms)",
            VALUE: 2000,
          },
          median_largest_contentful_paint_time_ms: {
            KEY: "LCP",
            LABEL: "≤2.5s (2500ms)",
            VALUE: 2500,
          },
          median_speed_index: {
            KEY: "SI",
            LABEL: "≤5.0s (5000ms)",
            VALUE: 5000,
          },
          median_first_interactive_time_ms: {
            KEY: "TTI",
            LABEL: "≤5.0s (5000ms)",
            VALUE: 5000,
          },
          median_total_blocking_time_ms: {
            KEY: "TBT",
            LABEL: "≤0.5s (500ms)",
            VALUE: 500,
          },
          median_cumulative_layout_shift: {
            KEY: "CLS",
            LABEL: "0.1",
            VALUE: 0.1,
          },
        },
        BGT: {
          median_html_bytes: {
            KEY: "HTML",
            LABEL: "30kb",
            VALUE: 30000,
          },
          median_css_bytes: {
            KEY: "CSS",
            LABEL: "40kb",
            VALUE: 40000,
          },
          median_font_bytes: {
            KEY: "FONT",
            LABEL: "80kb",
            VALUE: 80000,
          },
          median_javascript_bytes: {
            KEY: "JS",
            LABEL: "300kb",
            VALUE: 300000,
          },
          median_image_bytes: {
            KEY: "IMAGES",
            LABEL: "340kb",
            VALUE: 340000,
          },
          median_video_bytes: {
            KEY: "VIDEOS",
            LABEL: "470kb",
            VALUE: 470000,
          },
        },
      },
      CONFIGURATION: {
        SPRINT: "TBD",
        "ACCEPTANCE PROFILE": "3G FAST",
        "NETWORK PROFILE": "LTE",
        "NETWORK THROTTLING": "70 ms TCP RTT, 12000 Kbps (SIMULATED)",
        "UA PROFILE": "iPhone 6/7/8",
        "AVERAGE MEAN SCORE": "48 PASSES (24 HRS)",
      },
      RIGOR: {
        API: {
          KEY: "1qqtUC1rfm3WHcb_U7g1",
          URL: {
            DEV: "https://monitoring.rigor.com/reports/7535",
            PRD: "https://monitoring.rigor.com/reports/7545",
          },
        },
      },
      PAGES: {
        HP: {
          URL: {
            DEV: "https://development1.coach.com/",
            PRD: "https://www.coach.com/",
          },
          KPI: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=185460&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=184169&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
          BGT: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=185460&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=184169&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
        },
        PLP: {
          URL: {
            DEV:
              "https://development1.coach.com/en/women/handbags?page=7&start=0",
            PRD: "https://www.coach.com/shop/women-new-arrivals-new-arrivals",
          },
          KPI: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=185466&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=184175&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
          BGT: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=185466&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=184175&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
        },
        PDP: {
          URL: {
            DEV:
              "https://development1.coach.com/en/products/archive-glovetanned-pebble-leather-duffle-20/78804.html?frp=78804%20B4/BK",
            PRD:
              "https://www.coach.com/coach-alie-shoulder-bag-in-signature-jacquard-with-snakeskin-detail/C0712.html?dwvar_color=B4S0M",
          },
          KPI: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=185467&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=184173&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
          BGT: {
            DEV:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T21:18:16.986Z&to=2021-03-16T21:18:16.986Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=185467&interval=24h&grouping[]=page&check_type=real_browser&type=line",
            PRD:
              "https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-03-02T03:13:36.823Z&to=2021-03-16T03:13:36.823Z&segment=status&metrics[]=median_content_bytes&metrics[]=median_html_bytes&metrics[]=median_image_bytes&metrics[]=median_javascript_bytes&metrics[]=median_css_bytes&metrics[]=median_video_bytes&metrics[]=median_font_bytes&metrics[]=median_other_bytes&status[]=success&status[]=failure&check_ids[]=184173&interval=24h&grouping[]=page&check_type=real_browser&type=line",
          },
        },
      },
    },
  },
};
