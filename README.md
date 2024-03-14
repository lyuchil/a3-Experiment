# Visualization Experiment

## Experiment Hosted Link

[Experiment Website](https://lyuchil.github.io/a3-Experiment-backup/)

## Description

This project presents an interactive experiment where users engage with 5 different types of charts, aiming to evaluate their perception of data visualizations. Participants are shown graphs with two points highlighted in red and asked to estimate what percent the smaller point represents of the larger one. Upon completing the quiz, participants receive their results, which they can opt to submit. This experiment was primarily developed using HTML, JavaScript, CSS, and leverages the Google Sheets API alongside Express for data collection. Though initially designed to record responses directly to Google Sheets, deployment constraints led us to adjust the functionality to display results at the quiz's end, hosted via GitHub Pages.

![Experiment Screenshot](images/experiment.png) <!-- Replace path/to/screenshot.png with the path to your screenshot -->

## Technical Achievements

- **Google Sheets API Integration**: Achieved a seamless connection with Google Sheets API using Express, enabling real-time data recording of user responses during local testing.
- **Responsive Web Design**: Implemented responsive design principles ensuring the experiment's accessibility across various devices and screen sizes.
- **Data Visualization with D3.js**: Utilized D3.js to dynamically generate randomized charts for the quiz, enhancing the interactivity and engagement of the experiment.

## Design Achievements

- **Interactive Quiz Layout**: Crafted an intuitive and engaging user interface for the experiment, guiding participants through the visualization tasks with clear instructions and instant feedback.
- **Styling with Google Fonts**: Incorporated Google Fonts to improve readability and aesthetics, contributing to a more polished and professional appearance.
- **Chart Varieties**:
  - **Horizontal Bar Chart**: Showcases comparisons among categories horizontally.  
    ![Horizontal Bar Chart](images/horizontal_bar.png)
  - **Vertical Bar Chart**: Facilitates understanding of category comparisons vertically.  
    ![Vertical Bar Chart](images/vertical_bar.png)
  - **Line Chart**: Illustrates trends or changes over intervals.  
    ![Line Chart](images/line.png)
  - **Pie Chart**: Represents data in proportions within a circular graph.  
    ![Pie Chart](images/pie.png)
  - **Tree Map**: Displays hierarchical data using nested rectangles.  
    ![Tree Map](images/treemap.png)

## Data Analysis

The collected data was analyzed to calculate the average log2Error across all visualization types and trials, further enriched with Bootstrapped 95% confidence intervals to provide a robust measure of participants' accuracy in interpreting the visualizations.

![Error Values](images/error_values.png)
