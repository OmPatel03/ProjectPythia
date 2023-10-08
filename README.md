# PROJECTPythia
# Kp Index Prediction from DSCOVR Spectral Data

## Table of Contents
- [Problem Description](#problem-description)
- [Machine Learning Solution](#machine-learning-solution)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Description

Space weather is a critical consideration for many technological systems, including satellite communications, power grids, and navigation systems. One key parameter in space weather monitoring is the Kp index, which measures the magnitude of geomagnetic solar storms. Accurate prediction of the Kp index is crucial for space weather forecasting and monitoring.

The Deep Space Climate Observatory (DSCOVR) satellite provides valuable data for predicting the Kp index. However, the spectral data collected by DSCOVR may suffer from anomalies due to functional and electrical failures, making prediction challenging. Our project addresses this problem by developing a machine learning solution to predict the Kp index accurately despite potential data faults.

---

## Machine Learning Solution

### Overview

We employ a machine learning approach, specifically a Convolutional Neural Network (CNN) and a Recurrent Neural Network (RNN), to predict the Kp index from DSCOVR spectral data. Our solution involves the following key components:

- **Data Collection and Preprocessing**: We gather spectral data from the DSCOVR satellite, including the magnetic field vector and spectral data. The data is preprocessed to normalize and handle missing values, making it suitable for model training.

- **2D CNN Model**: We utilize a 2D CNN to process spatial
