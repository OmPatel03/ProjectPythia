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

- **2D CNN Model**: We utilize a 2D CNN to process spatial data, such as the magnetic field vector. The model consists of convolutional layers, max-pooling layers, and dense layers to learn patterns and predict the Kp index.

- **1D CNN Model**: For sequential data, such as spectral data, we employ a 1D CNN. This model also includes convolutional and dense layers optimized for sequential data processing.

- **RNN Model**: To capture temporal dependencies within the data, we introduce an RNN model. The RNN architecture comprises LSTM layers and dense layers for Kp index regression.

### Training and Evaluation

- The 2D CNN is trained for a limited number of epochs due to computational constraints.

- The 1D CNN undergoes more extensive training, although still constrained by resources.

- The RNN model is trained with a single epoch to balance computational costs and model performance.

- We use loss and mean absolute error (MAE) as performance metrics, aiming for validation MAE values less than or equal to 1.

---


## Usage

- Use the trained models to predict the Kp index from your own DSCOVR spectral data.
- Experiment with different hyperparameters and training durations to fine-tune model performance.
- Explore potential enhancements, such as using external datasets to improve data quality and incorporating Transformer architectures for advanced predictions.

### Jupyter Notebook and Model Files

- Refer to the Jupyter notebook `Pythia.ipynb` for a detailed walkthrough of the project.
- Find the trained model files in the `Model/` folder for direct usage in your applications.

---

## Contributing

We welcome contributions to this project. Feel free to open issues, submit pull requests, or provide feedback to help us improve our Kp index prediction solution.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
