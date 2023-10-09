# Kp Index Prediction from DSCOVR Spectral Data

## Table of Contents
- [Problem Description](#problem-description)
- [Project Name Pythia](#project-name-pythia)
- [Machine Learning Solution](#machine-learning-solution)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Description

Space weather is a critical consideration for many technological systems, including satellite communications, power grids, and navigation systems. One key parameter in space weather monitoring is the Kp index, which measures the magnitude of geomagnetic solar storms. Accurate prediction of the Kp index is crucial for space weather forecasting and monitoring.

The Deep Space Climate Observatory (DSCOVR) satellite provides valuable data for predicting the Kp index. However, the spectral data collected by DSCOVR may suffer from anomalies due to functional and electrical failures, making prediction challenging. Our project addresses this problem by developing a machine learning solution to predict the Kp index accurately despite potential data faults.

---

## Project Name Pythia

The name "Pythia" was chosen for our project with a specific inspiration in mind. The original challenge that led to the creation of this project was titled "Develop the Oracle of DSCOVR." In ancient Greek mythology, the Oracle of Delphi was known as "Pythia." Pythia was a high priestess of the Temple of Apollo, where Apollo was revered as the sun god among other attributes.

The choice of the name "Pythia" reflects our project's aim to harness the power of data and machine learning to provide valuable insights, much like the oracle of ancient times. We strive to predict and shed light on solar activities, including the Kp index, using data from the DSCOVR satellite, with the same sense of guidance and foresight that Pythia offered in the realm of ancient divination.

"Pythia" symbolizes our project's dedication to leveraging technology to uncover the mysteries of space weather and solar phenomena, much as the ancient Oracle of Delphi once did in a different context.

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

### Scientific Paper

- For a more detailed and comprehensive overview of our project, please refer to the scientific paper available in the [`Project_Pythia.pdf`](https://github.com/OmPatel03/ProjectPythia/blob/main/Project_Pythia.pdf) document.

### Website
- To observe the model's predictions, we have a website made with an interactive globe component found here [https://recondit.github.io/SpaceApps/](https://recondit.github.io/SpaceApps/). 
- (Sadly the satellite model is not visible on the GitHub pages website however, one can follow the steps below to compile the website.)

#### Compiling the Website Locally

To compile and run the project website locally, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from [Node.js website](https://nodejs.org/).

2. Clone this repository to your local machine if you haven't already:

   ```sh
   git clone <repository-url>
   
3. Open a terminal or command prompt and navigate to the project directory:
   ```sh
   cd <project-directory>

4. Install the project dependencies using npm:
   ```sh
   npm install

5. After the installation is complete, you can start the development server to compile and view the website locally:
   ```sh
   npm start

6. Open your web browser and go to http://localhost:3000 to access the locally compiled website.

7. You can now make changes to the website source code, and the development server will automatically update the site with your changes.

8. To stop the development server, you can press Ctrl + C in the terminal.
---

## Contributing

We welcome contributions to this project. Feel free to open issues, submit pull requests, or provide feedback to help us improve our Kp index prediction solution.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
