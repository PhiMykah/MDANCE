Search.setIndex({"alltitles": {"1. Input Preparations": [[5, "input-preparations"]], "2. NANI Screening": [[5, "nani-screening"]], "3. Analysis of NANI Screening Results": [[5, "analysis-of-nani-screening-results"]], "4. Cluster Assignment": [[5, "cluster-assignment"]], "5. Extract frames for each cluster (Optional)": [[5, "extract-frames-for-each-cluster-optional"]], "About MDANCE": [[0, "about-mdance"]], "Background": [[0, "background"]], "Citing MDANCE": [[0, "citing-mdance"]], "Cluster": [[1, "cluster"]], "Clustering Algorithms": [[0, "clustering-algorithms"]], "Clustering Postprocessing": [[0, "clustering-postprocessing"]], "Contact": [[0, "contact"]], "Contents:": [[4, null]], "Contributing": [[0, "contributing"]], "Execution": [[5, "execution"], [5, "execution-1"]], "Getting Started": [[3, "getting-started"]], "Indices and tables": [[4, "indices-and-tables"]], "Inputs": [[1, "inputs"], [5, "inputs"], [5, "inputs-1"]], "Installation": [[3, "installation"]], "License": [[0, "license"]], "MDANCE's API:": [[4, null]], "MDANCE's CLI:": [[4, null]], "MDANCE's Tutorials:": [[4, null]], "Outputs": [[1, "outputs"], [5, "outputs"], [5, "outputs-1"]], "Overview": [[5, "overview"]], "PRIME": [[1, "prime"]], "Parameters:": [[1, "parameters"]], "Returns:": [[1, "returns"]], "System info": [[5, "system-info"], [5, "system-info-2"]], "Table of Contents": [[5, "table-of-contents"]], "Tools": [[1, "tools"]], "Tutorial": [[5, "tutorial"]], "Usage": [[3, "usage"]], "Welcome to MDANCE\u2019s documentation!": [[4, "welcome-to-mdance-s-documentation"]], "cli": [[2, "cli"]], "k-means NANI Tutorial": [[5, "k-means-nani-tutorial"]], "k-means params": [[5, "k-means-params"]], "mdance.cluster.nani": [[1, "module-mdance.cluster.nani"]], "mdance.inputs.preprocess": [[1, "module-mdance.inputs.preprocess"]], "mdance.outputs.postprocess": [[1, "module-mdance.outputs.postprocess"]], "mdance.prime.rep_frames": [[1, "module-mdance.prime.rep_frames"]], "mdance.prime.sim_calc": [[1, "module-mdance.prime.sim_calc"]], "mdance.tools.bts": [[1, "module-mdance.tools.bts"]], "mdance.tools.esim_modules": [[1, "module-mdance.tools.esim_modules"]], "mdance.tools.isim_modules module": [[1, "module-mdance.tools.isim_modules"]]}, "docnames": ["about", "api", "cli", "getting_started", "index", "nani"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1}, "filenames": ["about.rst", "api.rst", "cli.rst", "getting_started.rst", "index.rst", "nani.rst"], "indexentries": {}, "objects": {"mdance.cluster": [[1, 0, 0, "-", "nani"]], "mdance.cluster.nani": [[1, 1, 1, "", "KmeansNANI"], [1, 4, 1, "", "compute_scores"]], "mdance.cluster.nani.KmeansNANI": [[1, 2, 1, "", "N_atoms"], [1, 2, 1, "", "Properties"], [1, 3, 1, "", "_check_init_type"], [1, 3, 1, "", "_check_percentage"], [1, 2, 1, "", "centers"], [1, 2, 1, "", "cluster_dict"], [1, 3, 1, "", "compute_scores"], [1, 3, 1, "id4", "create_cluster_dict"], [1, 2, 1, "", "data"], [1, 3, 1, "", "execute_kmeans_all"], [1, 3, 1, "", "get_kmeans_info"], [1, 2, 1, "", "init_type"], [1, 3, 1, "id5", "initiate_kmeans"], [1, 2, 1, "", "kmeans"], [1, 3, 1, "id6", "kmeans_clustering"], [1, 2, 1, "", "kmeans_info"], [1, 2, 1, "", "labels"], [1, 2, 1, "", "metric"], [1, 2, 1, "", "n_clusters"], [1, 2, 1, "", "n_iter"], [1, 2, 1, "", "percentage"], [1, 3, 1, "id7", "write_centroids"]], "mdance.inputs": [[1, 0, 0, "-", "preprocess"]], "mdance.inputs.preprocess": [[1, 1, 1, "", "Normalizer"], [1, 4, 1, "", "gen_traj_numpy"], [1, 4, 1, "", "normalize_file"], [1, 4, 1, "", "read_cpptraj"]], "mdance.inputs.preprocess.Normalizer": [[1, 2, 1, "", "c_total"], [1, 2, 1, "", "custom_max"], [1, 2, 1, "", "custom_min"], [1, 2, 1, "", "data"], [1, 2, 1, "", "file_path"], [1, 3, 1, "id0", "get_c_total"], [1, 3, 1, "id1", "get_min_max"], [1, 3, 1, "id2", "get_v2_norm"], [1, 3, 1, "id3", "get_v3_norm"], [1, 2, 1, "", "max"], [1, 2, 1, "", "min"], [1, 2, 1, "", "normed_data"]], "mdance.outputs": [[1, 0, 0, "-", "postprocess"]], "mdance.outputs.postprocess": [[1, 4, 1, "", "numpy_array_to_crd_traj"], [1, 4, 1, "", "unnormalize_data"]], "mdance.prime": [[1, 0, 0, "-", "rep_frames"], [1, 0, 0, "-", "sim_calc"]], "mdance.prime.rep_frames": [[1, 4, 1, "", "calculate_max_key"], [1, 4, 1, "", "gen_all_methods_max"], [1, 4, 1, "", "gen_one_method_max"]], "mdance.prime.sim_calc": [[1, 1, 1, "", "FrameSimilarity"], [1, 4, 1, "", "weight_dict"]], "mdance.prime.sim_calc.FrameSimilarity": [[1, 3, 1, "", "calculate_medoid"], [1, 3, 1, "", "calculate_outlier"], [1, 3, 1, "", "calculate_pairwise"], [1, 3, 1, "", "calculate_union"]], "mdance.tools": [[1, 0, 0, "-", "bts"], [1, 0, 0, "-", "esim_modules"], [1, 0, 0, "-", "isim_modules"]], "mdance.tools.bts": [[1, 4, 1, "id8", "align_traj"], [1, 4, 1, "id9", "calculate_comp_sim"], [1, 4, 1, "id10", "calculate_medoid"], [1, 4, 1, "id11", "calculate_outlier"], [1, 4, 1, "id12", "diversity_selection"], [1, 4, 1, "", "equil_align"], [1, 4, 1, "", "extended_comparison"], [1, 4, 1, "id13", "get_new_index_n"], [1, 4, 1, "id14", "mean_sq_dev"], [1, 4, 1, "id15", "msd_condensed"], [1, 4, 1, "id16", "trim_outliers"]], "mdance.tools.esim_modules": [[1, 1, 1, "", "SimilarityIndex"], [1, 4, 1, "", "calc_comp_sim"], [1, 4, 1, "", "calc_medoid"], [1, 4, 1, "", "calc_outlier"], [1, 4, 1, "", "calculate_counters"], [1, 4, 1, "", "gen_sim_dict"]], "mdance.tools.esim_modules.SimilarityIndex": [[1, 3, 1, "", "__call__"], [1, 3, 1, "", "ac_nw"], [1, 3, 1, "", "ac_w"], [1, 3, 1, "", "bub_nw"], [1, 3, 1, "", "bub_w"], [1, 3, 1, "", "ct1_nw"], [1, 3, 1, "", "ct1_w"], [1, 3, 1, "", "ct2_nw"], [1, 3, 1, "", "ct2_w"], [1, 3, 1, "", "ct3_nw"], [1, 3, 1, "", "ct3_w"], [1, 3, 1, "", "ct4_nw"], [1, 3, 1, "", "ct4_w"], [1, 3, 1, "", "fai_nw"], [1, 3, 1, "", "fai_w"], [1, 3, 1, "", "gen_sim_dict"], [1, 3, 1, "", "gle_nw"], [1, 3, 1, "", "gle_w"], [1, 3, 1, "", "ja0_nw"], [1, 3, 1, "", "ja0_w"], [1, 3, 1, "", "ja_nw"], [1, 3, 1, "", "ja_w"], [1, 3, 1, "", "jt_nw"], [1, 3, 1, "", "jt_w"], [1, 3, 1, "", "rr_nw"], [1, 3, 1, "", "rr_nw_nw"], [1, 3, 1, "", "rr_w"], [1, 3, 1, "", "rt_nw"], [1, 3, 1, "", "rt_w"], [1, 3, 1, "", "sm_nw"], [1, 3, 1, "", "sm_nw_nw"], [1, 3, 1, "", "sm_w"], [1, 3, 1, "", "ss1_nw"], [1, 3, 1, "", "ss1_w"], [1, 3, 1, "", "ss2_nw"], [1, 3, 1, "", "ss2_w"]], "mdance.tools.isim_modules": [[1, 4, 1, "", "calculate_comp_sim"], [1, 4, 1, "", "calculate_counters"], [1, 4, 1, "", "calculate_isim"], [1, 4, 1, "", "calculate_medoid"], [1, 4, 1, "", "calculate_outlier"], [1, 4, 1, "", "gen_sim_dict"]]}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "method", "Python method"], "4": ["py", "function", "Python function"]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:attribute", "3": "py:method", "4": "py:function"}, "terms": {"": 1, "0": 1, "00504": 1, "00505": 1, "021": 1, "1": [1, 3], "10": [0, 1, 3], "1021": 0, "11": 5, "1186": 1, "12": 1, "1549": 0, "1d": 1, "2": 1, "2024": 0, "2d": [1, 5], "2nd": 5, "3": 1, "30": 5, "4": [1, 3], "4c00308": 0, "50": 5, "6": 5, "9618": 0, "A": 1, "For": [0, 1, 5], "If": [0, 1, 5], "It": 4, "NOT": 5, "OR": 1, "THESE": 5, "The": [0, 1, 5], "There": 5, "To": 3, "__": 5, "__call__": 1, "__init__": 1, "__version__": 3, "_check_init_typ": 1, "_check_percentag": 1, "_description_": 1, "_perform_calcul": 1, "about": 4, "ac": 0, "ac_nw": 1, "ac_w": 1, "accord": 5, "add": 1, "addit": 0, "aim": 1, "alain": 0, "algorithm": [1, 4], "align": [1, 5], "align_method": 1, "align_traj": 1, "aligned_tau": 1, "aligned_traj_numpi": 1, "all": [1, 4, 5], "allow": 0, "alreadi": 5, "amber": 1, "american": 0, "an": [0, 5], "analysi": [0, 3], "analyz": [1, 5], "appli": 1, "applic": [4, 5], "approxim": 1, "ar": [0, 1, 5], "arg": 1, "argument": 1, "ari": [0, 1, 3, 4], "arrai": [1, 5], "array_lik": 1, "articl": [0, 1], "assign_label": 5, "atom": [1, 5], "atomsel": 1, "attribut": 1, "author": 0, "aux": 1, "auxiliari": 1, "auxillari": 1, "avail": 1, "averag": [1, 5], "avg": 1, "award": 0, "backbon": 5, "background": 4, "baroni": 1, "base": [1, 5], "becaus": 1, "behind": 1, "below": 1, "best": 5, "between": [1, 5], "bhattacharyya": 1, "binari": 1, "biomedcentr": 1, "blob_disk": 5, "bool": 1, "bouldin": [1, 5], "break_lin": 1, "bt": [4, 5], "bub": 1, "bub_nw": 1, "bub_w": 1, "buser": 1, "c": 1, "c0": 1, "c_sum": 1, "c_threshold": 1, "c_total": 1, "ca": 1, "calc_comp_sim": 1, "calc_medoid": 1, "calc_outli": 1, "calcul": [1, 5], "calculate_comp_sim": 1, "calculate_count": 1, "calculate_isim": 1, "calculate_max_kei": 1, "calculate_medoid": 1, "calculate_outli": 1, "calculate_pairwis": 1, "calculate_union": 1, "calinski": 1, "call": 1, "callinski": 5, "can": [1, 5], "carlo": 0, "ceil": 1, "center": [1, 5], "centroid": 1, "chang": 5, "check": [1, 3], "chemic": 0, "chen": 0, "chen_k": 0, "cite": [1, 4], "class": 1, "cluster": [3, 4], "cluster_dict": 1, "cluster_fold": 1, "coeffici": 1, "coincid": 1, "column": 1, "columnwis": 1, "com": 1, "command": 3, "comp_sim": [1, 3, 5], "compar": 1, "comparison": 1, "complement": 1, "complementari": 1, "complet": 1, "comput": [0, 1], "compute_scor": 1, "concaten": 1, "condens": 1, "contact": 4, "contain": [0, 1, 5], "contribut": 4, "converg": 1, "convert": [1, 5], "coordin": 1, "correspond": [1, 5], "counter": 1, "cpptraj": 1, "cpptraj_atomsel": 1, "crd": 1, "creat": 1, "create_cluster_dict": 1, "criteria": 5, "criterion": 1, "csv": 5, "ct1_nw": 1, "ct1_w": 1, "ct2_nw": 1, "ct2_w": 1, "ct3_nw": 1, "ct3_w": 1, "ct4_nw": 1, "ct4_w": 1, "custom_avg": 1, "custom_max": 1, "custom_min": 1, "d": 1, "daniel": 0, "data": [1, 3, 5], "data_fil": 5, "data_typ": 1, "dataset": [1, 5], "davi": [1, 5], "db": 5, "dcd": [1, 5], "default": [1, 5], "defin": 1, "delimit": 5, "deriv": 5, "descript": 1, "design": [0, 4, 5], "desir": 1, "detail": [0, 1, 5], "deviat": [1, 5], "dict": 1, "dictionari": 1, "differ": [1, 5], "directori": 5, "dissimilar": 1, "distanc": 1, "div_select": 1, "divers": 1, "diversity_select": 1, "doc": 1, "document": 1, "documentation_pag": 1, "doi": 0, "domin": 1, "dynam": [0, 3, 4, 5], "e": [4, 5], "each": 1, "easi": 4, "edit": 5, "element": 1, "elev": 1, "end": 5, "end_n_clust": 5, "ensembl": [0, 3], "equil_align": 1, "esim": 1, "esim_modul": 4, "etc": [1, 4, 5], "everi": [1, 5], "exampl": [1, 3, 5], "execut": 1, "execute_kmeans_al": 1, "extend": 1, "extended_comparison": [1, 5], "extens": 0, "factor": 1, "fai": 1, "fai_nw": 1, "fai_w": 1, "faiman": 1, "faith": 1, "fals": 1, "farthest": 1, "fast": 4, "featur": 5, "file": [0, 1, 5], "file_path": 1, "find": 1, "fingerprint": [1, 5], "first": 1, "fit": 3, "flexibl": [0, 3, 4], "float": 1, "florida": 1, "follow": [0, 3, 5], "format": [1, 5], "found": 5, "fraction": 1, "frame": 1, "frame_weighted_sim": 1, "framesimilar": 1, "from": [1, 3, 5], "full": 1, "function": 1, "g": [4, 5], "gen_all_methods_max": 1, "gen_one_method_max": 1, "gen_sim_dict": 1, "gen_traj_numpi": 1, "gener": [0, 1], "genfromtxt": 5, "get": [1, 4], "get_c_tot": 1, "get_kmeans_info": 1, "get_min_max": 1, "get_new_index_n": 1, "get_v2_norm": 1, "get_v3_norm": 1, "gle": 1, "gle_nw": 1, "gle_w": 1, "gleason": 1, "greater": [1, 5], "group": 1, "h": 1, "ha": 5, "harabasz": [1, 5], "have": [1, 5], "health": 0, "highest": 1, "howev": [1, 5], "html": 1, "http": [0, 1], "i": [0, 1, 3, 4, 5], "ignor": 1, "imag": 5, "import": 3, "improv": 0, "index": [1, 4, 5], "indic": [1, 5], "inform": 1, "init": 3, "init_typ": [1, 3, 5], "initi": [1, 3, 5], "initiate_kmean": [1, 3], "input": 4, "input_fil": 1, "input_top": 1, "input_traj": 1, "input_traj_numpi": 5, "instal": 4, "instanti": 1, "institut": 0, "int": 1, "integ": 1, "interv": 1, "ipynb": 5, "isim": 1, "isim_modul": 4, "issn": 0, "iter": [1, 5], "its": 3, "ja": 1, "ja0_nw": 1, "ja0_w": 1, "ja_nw": 1, "ja_w": 1, "jaccard": 1, "jcheminf": 1, "jctc": 0, "journal": 0, "json": 1, "jt": 1, "jt_nw": 1, "jt_w": 1, "jun": 0, "k": [0, 1, 4], "kei": 1, "kmean": [1, 3], "kmeans_clust": 1, "kmeans_info": 1, "kmeansnani": [1, 3], "kochert": 0, "kron": 1, "kroneck": 1, "kwarg": 1, "label": [1, 5], "largest": 1, "last": 5, "least": 1, "length": 1, "lexin": 0, "licens": 4, "like": [1, 5], "line": 1, "list": [1, 5], "load": [1, 3, 5], "lowest": [1, 5], "make": 5, "mass": 5, "matrix": 1, "matthew": 0, "max": 1, "maximum": [1, 5], "md": 5, "mdana_atomsel": 1, "mdanalysi": 1, "mdanc": 3, "mdcrd": 1, "mean": [0, 1, 4], "mean_sq_dev": 1, "means_2024": 0, "meant": 5, "medic": 0, "medoid": 1, "method": [1, 5], "metric": [0, 1, 3, 5], "michen": 1, "min": 1, "minimum": 1, "miranda": [0, 1], "mit": 0, "mod": 3, "modul": [3, 4], "modular": 0, "molecul": 1, "molecular": [0, 3, 4, 5], "month": 0, "more": [0, 1], "most": 1, "msd": [1, 3, 5], "msd_condens": 1, "multipl": [1, 5], "must": [1, 5], "n": [0, 1, 3, 4], "n_ari": 1, "n_atom": [1, 3, 5], "n_cluster": [1, 3, 5], "n_featur": 1, "n_init": 3, "n_iter": 1, "n_object": 1, "n_sampl": 1, "n_structur": 5, "n_trim": 1, "name": [1, 5], "nani": [0, 3, 4], "nation": 0, "natur": 1, "nc": 5, "nd": 1, "ndarrai": [1, 5], "necessari": 1, "need": 5, "new": [0, 1], "non": [1, 5], "none": [1, 3], "norm_data": 1, "norm_fold": 1, "norm_typ": 1, "normal": [1, 5], "normalize_fil": 1, "normed_data": 1, "note": [0, 1], "notebook": 5, "np": [1, 3, 5], "npy": [3, 5], "num_column": 1, "number": [0, 1, 5], "numpi": [1, 5], "numpy_array_to_crd_traj": 1, "nw": 1, "nw_dict": 1, "o": 1, "object": 1, "observ": 1, "obtain": 1, "one": [1, 5], "onli": [1, 5], "option": 1, "org": [0, 1], "origin": [1, 5], "other": [1, 5], "otherwis": 5, "outlier": 1, "output": 4, "output_base_nam": 5, "output_dir": 5, "output_nam": 1, "over": 5, "overview": 4, "packag": [0, 3, 4], "page": 4, "pair": 1, "pairwis": 1, "paper": [0, 1], "param": 1, "paramet": 5, "path": 1, "pdb": [1, 5], "per": 1, "percentag": [1, 3], "pip": 3, "pleas": [0, 1], "point": 1, "popul": 5, "postprocess": [4, 5], "power": 1, "power_n": 1, "preprocess": [4, 5], "prime": [0, 4], "print": 3, "prmtop": 5, "prmtopfilenam": 1, "project": [0, 3], "proper": 3, "properti": 1, "provid": [0, 1], "publish": 0, "py": 5, "python": 5, "qualiti": 5, "question": 0, "quintana": [0, 1], "r": 0, "r35gm150620": 0, "rais": 1, "ram\u00f3n": 0, "random": 1, "random_st": 3, "randomli": 1, "rang": [1, 5], "rao": 1, "read": 1, "read_cpptraj": 1, "real": 1, "recommend": 5, "ref_index": 1, "refer": 1, "releas": 0, "remov": 1, "rep": 1, "rep_fram": 4, "repositori": 0, "repres": 1, "represent": 1, "research": 0, "resid": 1, "return_dict": 1, "roe": 0, "roger": 1, "rr": 1, "rr_nw": 1, "rr_nw_nw": 1, "rr_w": 1, "rt": 1, "rt_nw": 1, "rt_w": 1, "rtype": 1, "run": [1, 3, 5], "russel": 1, "s13321": 1, "sampl": 5, "save": 5, "scene": 1, "scienc": 0, "score": [1, 5], "screen_nani": 5, "script": [1, 5], "search": 4, "see": [0, 1, 5], "seed": [1, 5], "select": [1, 5], "select_from_n": 1, "selected_condens": 1, "selector": 5, "self": 1, "separ": 5, "seri": 4, "serv": 1, "set": [0, 1], "shape": [1, 5], "siev": [1, 5], "sim_calc": 4, "sim_dict": 1, "sim_fold": 1, "sim_to_medoid": 1, "similar": [0, 1, 5], "similarityindex": 1, "simmerl": 0, "simpson": 1, "simul": 0, "singl": 1, "skip": 5, "sm": 1, "sm_nw": 1, "sm_nw_nw": 1, "sm_w": 1, "smart": 1, "sneath": 1, "so": 1, "societi": 0, "sokal": 1, "sourc": 1, "specif": 5, "specifi": [1, 5], "spectrometri": 5, "speed": 1, "sq_selected_condens": 1, "sq_sum": 1, "squar": [1, 5], "src": 5, "ss1": 1, "ss1_nw": 1, "ss1_w": 1, "ss2": 1, "ss2_nw": 1, "ss2_w": 1, "ssn": 1, "stabl": 1, "start": [1, 4, 5], "start_n_clust": 5, "step": [1, 5], "store": 5, "str": 1, "string": 1, "sub": 1, "subset": 1, "sum": 1, "summari": 1, "summary_fil": 1, "support": 0, "sure": 5, "system": 1, "take": 5, "tanimoto": 1, "th": 5, "than": 5, "thei": 1, "theori": 0, "thi": [0, 1, 5], "threshold": 1, "time": 4, "titl": 0, "tool": [0, 4, 5], "top": 1, "topologi": [1, 5], "total": 1, "traj_numpi": 1, "trajectori": [0, 1, 5], "trajfilenam": 1, "treatment": 5, "trim": 1, "trim_frac": 1, "trim_outli": 1, "true": 1, "tupl": 1, "two": 5, "type": [1, 5], "typeerror": 1, "u": [0, 1], "under": 0, "uni": 1, "uniform": 1, "union": 1, "univers": 1, "unnorm": 1, "unnormalize_data": 1, "unweight": 1, "up": 1, "urbani": 1, "url": 0, "us": [0, 1, 3, 4, 5], "usag": 4, "user": 5, "v2": 1, "v3": 1, "v3_norm": 1, "valid": 5, "valu": 1, "valueerror": 1, "vanilla_kmean": 1, "vector": 1, "version": 1, "view": 1, "w_dict": 1, "w_factor": 1, "wa": 0, "wai": 1, "we": 5, "weigh": 1, "weight": 1, "weight_dict": 1, "weighted_by_fram": 1, "welcom": 0, "when": 1, "whether": 1, "wide": 5, "without": 1, "wize": 1, "write": 1, "write_centroid": 1, "year": 0, "you": [0, 5], "your": [0, 5]}, "titles": ["About MDANCE", "Inputs", "cli", "Getting Started", "Welcome to MDANCE\u2019s documentation!", "<em>k</em>-means NANI Tutorial"], "titleterms": {"": 4, "1": 5, "2": 5, "3": 5, "4": 5, "5": 5, "about": 0, "algorithm": 0, "analysi": 5, "api": 4, "assign": 5, "background": 0, "bt": 1, "cite": 0, "cli": [2, 4], "cluster": [0, 1, 5], "contact": 0, "content": [4, 5], "contribut": 0, "document": 4, "each": 5, "esim_modul": 1, "execut": 5, "extract": 5, "frame": 5, "get": 3, "indic": 4, "info": 5, "input": [1, 5], "instal": 3, "isim_modul": 1, "k": 5, "licens": 0, "mdanc": [0, 1, 4], "mean": 5, "modul": 1, "nani": [1, 5], "option": 5, "output": [1, 5], "overview": 5, "param": 5, "paramet": 1, "postprocess": [0, 1], "prepar": 5, "preprocess": 1, "prime": 1, "rep_fram": 1, "result": 5, "return": 1, "screen": 5, "sim_calc": 1, "start": 3, "system": 5, "tabl": [4, 5], "tool": 1, "tutori": [4, 5], "usag": 3, "welcom": 4}})