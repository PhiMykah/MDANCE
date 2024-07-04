Molecular Dynamics Analysis with *N*-ary Clustering Ensembles (MDANCE) is a flexible *n*-ary clustering package that provides a set of tools for clustering Molecular Dynamics trajectories. The package is written in Python and an extension of the *n*-ary similarity framework. The package is designed to be modular and extensible, allowing for the addition of new clustering algorithms and similarity metrics.
<h3 align="center">
    <p><a href="https://github.com/mqcomplab/MDANCE"><img src="https://img.shields.io/badge/-MDANCE-000000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/mqcomplab/MDANCE" alt="MDANCE" width=auto height="25"></a></p>
    </h3>

## Background
Molecular Dynamics (MD) simulations are a powerful tool for studying the dynamics of biomolecules. However, the analysis of MD trajectories is challenging due to the large amount of data generated. Clustering is an unsupervised machine learning approach to group similar frames into clusters. The clustering results can be used to reveal the structure of the data, identify the most representative structures, and to study the dynamics of the system.

## Installation
```
pip install mdance
```
To check for proper installation, run the following command:
```python
import mdance
from mdance.cluster.nani import KmeansNANI
```
If it runs without any errors, the package is installed correctly.

## Clustering Algorithms
### NANI

*k*-Means *N*-Ary Natural Initiation ([NANI](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00308)) is an algorithm for selecting initial centroids for *k*-Means clustering. NANI is an extension of the *k*-Means++ algorithm. NANI stratifies the data to high density region and perform diversity selection on top of the it to select the initial centroids. This is a deterministic algorithm that will always select the same initial centroids for the same dataset and improve on *k*-means++ by reducing the number of iterations required to converge and improve the clustering quality.

**[A tutorial is available for NANI](https://github.com/mqcomplab/MDANCE/blob/main/tutorials/nani.md).**

Please refer to the [NANI paper](https://pubs.acs.org/doi/10.1021/acs.jctc.4c00308).

## Clustering Postprocessing
### PRIME
Protein Retrieval via Integrative Molecular Ensembles (PRIME)</b> is a novel algorithm that predicts the native structure of a protein from simulation or clustering data. These methods perfectly mapped all the structural motifs in the studied systems and required unprecedented linear scaling.

**[A tutorial is available for PRIME](https://github.com/mqcomplab/MDANCE/blob/main/tutorials/prime.md).**

Please refer to the [PRIME paper](https://www.biorxiv.org/content/10.1101/2024.03.19.585783v1). 