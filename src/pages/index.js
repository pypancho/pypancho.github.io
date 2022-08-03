import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    author: <div><span className="font-bold">Yan Pang</span>, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang, Teng Huang, Chao Liu </div>,
    title: "Sparse-Dyn: Sparse dynamic graph multirepresentation learning via event-based sparse temporal attention network",
    jounal: "International Journal of Intelligent Systems",
    paper: "https://doi.org/10.1002/int.22967",
    img: "https://onlinelibrary.wiley.com/cms/asset/00a3448e-89d1-4e24-9bc8-c3075a20b7e5/int22967-fig-0001-m.jpg",
    abstract: "Dynamic graph neural networks (DGNNs) have been widely used in modeling and representation learning of graph structure data. Current dynamic representation learning focuses on either discrete learning which results in temporal information loss, or continuous learning which involves heavy computation. In this study, we proposed a novel DGNN, sparse dynamic (Sparse-Dyn). It adaptively encodes temporal information into a sequence of patches with an equal amount of temporal-topological structure. Therefore, while avoiding using snapshots which cause information loss, it also achieves a finer time granularity, which is close to what continuous networks could provide. In addition, we also designed a lightweight module, Sparse Temporal Transformer, to compute node representations through structural neighborhoods and temporal dynamics. Since the fully connected attention conjunction is simplified, the computation cost is far lower than the current state-of-the-art. Link prediction experiments are conducted on both continuous and discrete graph data sets. By comparing several state-of-the-art graph embedding baselines, the experimental results demonstrate that Sparse-Dyn has a faster inference speed while having competitive performance.",
   },
   {
    author: <div><span className="font-bold">Yan Pang</span>, Teng Huang, Zhen Wang, Jianwei Li, Poorya Hosseini, Ji Zhang, Chao Liu, Shan Ai </div>,
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    jounal: "International Journal of Intelligent Systems",
    paper: "https://doi.org/10.1002/int.22966",
    img: "https://onlinelibrary.wiley.com/cms/asset/18dc386e-138f-4293-a5e9-aa30d31459f4/int22966-fig-0001-m.jpg",
    abstract: "Graph neural networks (GNNs) can be effectively applied to solve many real-world problems across widely diverse fields. Their success is inseparable from the message-passing mechanisms evolving over the years. However, current mechanisms treat all node features equally at the macro-level (node-level), and the optimal aggregation method has not yet been explored. In this paper, we propose a new GNN called Graph Decipher (GD), which transparentizes the message flows of node features from micro-level (feature-level) to global-level and boosts the performance on node classification tasks. Besides, to reduce the computational burden caused by investigating message-passing, only the relevant representative node attributes are extracted by graph feature filters, allowing calculations to be performed in a category-oriented manner. Experiments on 10 node classification data sets show that GD achieves state-of-the-art performance while imposing a substantially lower computational cost. Additionally, since GD has the ability to explore the representative node attributes by category, it can also be applied to imbalanced node classification on multiclass graph data sets..",
   },
  {
    author: <div> Vijay Harid, Chao Liu, <span className="font-bold">Yan Pang</span>, Akimun Jannat Alvina, Mark Golkowski, Poorya Hosseini, Morris Cohen</div>,
    title: "Automated Large‐Scale Extraction of Whistlers Using Mask‐Scoring Regional Convolutional Neural Network",
    jounal: "Geophysical Research Letters",
    paper: "https://doi.org/10.1029/2021GL093819",
    img: "https://agupubs.onlinelibrary.wiley.com/cms/asset/515d4c0d-3b76-4c45-8e6f-8d3e5639b394/grl62811-fig-0001-m.jpg",
    abstract: "Extremely and very low frequency (ELF/VLF) radio waves are generated from a variety of natural geophysical sources. Ground-based observations often contain signals of interest; however, the signals are typically immersed in a noisy environment due to lightning-generated sferics and additional anthropogenic sources. Although automated detection algorithms have been employed successfully in the past, extraction of arbitrary and broadband signal classes has been a challenge. In this work, we employ a mask-scoring regional convolutional neural network (MSRCNN) for automated extraction of whistlers from ground measurements at Palmer station, Antarctica. Statistics of several hundred thousand whistler receptions are evaluated to determine seasonal and diurnal variations at Palmer station along with strong correlations to lightning activity in the conjugate hemisphere. Although MSRCNN has been employed for whistler extraction in this work, the method has can be easily extended to other signal classes including chorus, hiss, and VLF triggered emissions.",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Yeyin Shi, Shancheng Gao, Feng Jiang, Arun-Narenthiran Veeranampalayam-Sivakumar, Laura Thompson, Joe Luck, Chao Liu</div>,
    title: "Improved crop row detection with deep neural network for early-season maize stand count in UAV imagery",
    jounal: "Computers and Electronics in Agriculture",
    paper: "https://doi.org/10.1016/j.compag.2020.105766",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0168169920311376-gr1.jpg",
    abstract: "Stand counts is one of the most common ways farmers assess plant growth conditions and management practices throughout the season. The conventional method for early-season stand count is through manual inspection, which is time-consuming, laborious, and spatially limited in scope. In recent years, Unmanned Aerial Vehicles (UAV) based remote sensing has been widely used in agriculture to provide low-altitude, high spatial resolution imagery to assist decision making. In this project, we designed a system that uses geometric descriptor information with deep neural networks to determine early-season maize stands from relatively low spatial resolution (10 to 25 mm) aerial data, which covers a relatively large area (10 to 25 hectares). Instead of detecting individual crops in a row, we process the entire row at one time, which significantly reduces the requirements for the clarity of the crops. Besides, our new MaxArea Mask Scoring RCNN algorithm could segment crop-rows out in each patch image, regardless of the terrain conditions. The robustness of our scheme was tested on data collected at two different fields in different years. The accuracy of the estimated emergence rate reached up to 95.8%. Due to the high processing speed of the system, it has the potential for real-time applications in the future.",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Jake Christenson, Feng Jiang, Tim Lei, Remy Rhoades, Drew Kern, John A Thompson, Chao Liu </div>,
    title: "Automatic detection and quantification of hand movements toward development of an objective assessment of tremor and bradykinesia in Parkinson's disease",
    jounal: "Journal of neuroscience methods",
    paper: "https://doi.org/10.1016/j.jneumeth.2019.108576",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0165027019304339-gr7.jpg",
    abstract: "Classification of parkinsonian symptoms, including tremor and bradykinesia, require the application of validated clinical rating scales which are inherently subjective. In this study, we assessed an objective measure of parkinsonian symptomology using automated analysis of hand gestures. We constructed and evaluated a hand and finger motion capture apparatus and analysis pipeline that recorded hand/finger motion of control subjects and patients with Parkinson's disease. The detailed three-dimensional (3D) motion features of each finger joint was extracted by using Discrete Wavelet Transform (DWT). The severity of tremor for each finger joint was quantitated by analyzing the motion changes in the frequency domain on four types of motion from five patients and twenty-two control subjects. The proposed approach could distinguish the behavior of patients with Parkinson's disease and control subjects by analyzing the detailed motion features of their hands/fingers. Previously established methods to quantitate finger movement dynamics focus on speed and amplitude. In contrast, our approach measures unsupervised motion features, in real-time, using wavelet analysis, of each individual finger joint during active free movement. The proposed study provides an objective assessment of tremor and bradykinesia in Parkinson's disease. Accordingly, this may help movement disorder clinicians to detect, diagnose and monitor treatment efficacy in Parkinson's disease.",
  },
  {
    author: <div>Feng Jiang, <span className="font-bold">Yan Pang</span>, ThienNgo N Lee, Chao Liu </div>,
    title: "Automatic object segmentation based on grabcut",
    jounal: "Science and Information Conference",
    paper: "https://doi.org/10.1007/978-3-030-17795-9_25",
    img: "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-030-17795-9_25/MediaObjects/473237_1_En_25_Fig3_HTML.png",
    abstract: "Object segmentation is used in multiple image processing applications. It is generally difficult to perform the object segmentation fully automatically. Most object segmentation schemes are developed based on prior information, training process, existing annotation, special mechanical settings or the human visual system modeling. We proposed a fully automatic segmentation method not relying on any training/learning process, existing annotation, special settings or the human visual system. The automatic object segmentation is accomplished by an objective object weight detection and modified GrabCut segmentation. The segmentation approach we propose is developed only based on the inherent image features. It is independent with various datasets and could be applied to different scenarios. The segmentation result is illustrated by testing a large dataset."
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-12 text-white fixed w-full">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-12 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">
              <a href="#top">Yan Pang</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#interest">Research Interests</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#news">News</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#educations">Educations</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#publications">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#teaching">Teaching Experiences</a>
            </div>
          </div>
        </div>
      </div>
      <div id="top"></div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16 md:pt-28">
          <div className="flex flex-row flex-wrap">
            <div>
              <img className="w-full md:w-60" src="https://pbs.twimg.com/media/FH6H1i4UUAEyhAN?format=jpg&name=medium"></img>
            </div>
            <div className="flex-1 ml-3 mt-3 md:mt-0">
              <p className="font-semibold text-sm" >
              I am currently an associate professor in the Institute of Artificial Intelligence and Blockchain at Guangzhou University, China. Prior to Guangzhou University, I was fortunate to be a Ph.D student in University of Colorado (2017-2021), advised by Dr. Chao Liu. My research interests span machine learning, computer vision, efficient deep learning, etc.
              </p>
              <p className="mt-3">
              From April 2021 to May 2022, I was a <b> machine learning scientist</b> at Moffett AI, Los Altos, CA. From Aug. 2017 to May 2021, I was an <b>instructor</b> in Department of Electrical Engineering at University of Colorado Denver. From Aug. 2018 to May 2021, I was a <b>instructor</b> in Department of Department of Engineering and Engineering Technology at Metropolitan State University of Denver.
              </p>
              <div className="mt-3 text-xs text-gray-600">
                <div><span className="font-bold">Address:</span> 230 Wai Huan Xi Road, Guangzhou Higher Education Mega Center, Guangzhou 510006 China | <span className="font-bold">Email:</span> yanpangee@gmail.com</div>
              </div>
            </div>
          </div>

          {/* <div className="mt-5 text-xs text-gray-600">
            <div> 230 Wai Huan Xi Road, Guangzhou Higher Education Mega Center, Guangzhou 510006 P.R.China</div>
            <div> Email: yanpangee@gmail.com</div>
          </div> */}

          <div id="interests" className="mt-12">
            <div className="text-blue-800 text-xl font-bold">Research Interests</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision. Specifically, I focus on </p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Graph Neural Networks</li>
                <li>Object Detection</li>
                <li>Key Points Detection</li>
                <li>Multimodal Learning</li>
                <li>Knowledge Distillation</li>
                <li>Photography</li>
                {/* <li>
                  <a className="text-blue-600 text-sm" href="https://www.instagram.com/pypancho/" target="_blank">Photography</a>
                </li> */}
              </ul>
            </div>
          </div>

          <div id="news">
            <div className="text-blue-800 text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Aug 15, 2022] <b>NEW:</b> Joined to Guangzhou University, Guangdong.</li>
                <li>[Jul 25, 2022] Two papers published to Journal of International Journal of Intelligent Systems.</li>
                <li>[Jun 20, 2022] Submitted one paper to Journal of IEEE Transactions on Neural Networks and Learning System.</li>
                <li>[Dec 18, 2021] Received my Ph.D. degree.</li>
                <li>[Aug 01, 2021] One paper published to Journal of Geophysical Research Letters. </li>
                <li>[Apr 12, 2021] Joined to Moffett AI, Los Altos, CA.</li>
                <li>[Nov 01, 2020] One paper published to Journal of Computers and Electronics in Agriculture. </li>
                <li>[Mar 01, 2020] One paper published to Journal of neuroscience method. </li>
                <li>[Apr 24, 2019] One paper accepted to Science and Information Conference</li>
              </ul>
            </div>
          </div>

          <div id="educations">
            <div className="text-blue-800 text-xl font-bold">Educations</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2017.08 - 2021.12, University of Colorado, Dept. of Electrical Engineering, Ph.D.</li>
                <li>2015.08 - 2017.05, University of Wyoming, Dept. of Electrical and Computer Engineering, Ph.D. Student</li>
                <li>2010.09 - 2013.05, Politecnico di Torino, Dept. of Electrical Engineering, Master</li>
                <li>2005.09 - 2009.05, Henan Polytechnic University, Dept. of Automation, Bachelor</li>
              </ul>
            </div>
          </div>

          <div id="publications">
            <div className="text-blue-800 text-xl font-bold">Recent Publications</div>
            <div className="py-3">
              {links.map((link, id) =>
                <div key={id} className="mb-8 flex flex-row flex-wrap items-center">
                  <div className="w-full md:w-60">
                    <img className="w-full md:w-60" src={link.img}></img>
                  </div>
                  <div className="md:ml-5 flex-1">
                    <div>{link.author}</div>
                    <div className="font-bold">{link.title}</div>
                    <div>{link.jounal}</div>
                    <div>
                      <a className="text-blue-600 text-sm" href={link.paper} target="_blank">Paper Link</a>
                    </div>
                  </div>
                  <div className="text-sm mt-3 text-gray-500">
                    {link.abstract}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div id="teaching">
            <div className="text-blue-800 text-xl font-bold">Teaching Experiences</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2020.01 - Present, JulyEdu, couses include advanced course of computer vision, graph neural networks, object detection, human pose estimation, object tracking, SLAM, C++, et al.</li>
                <li>2018.08 - 2021.05, Metropolitan State University of Denver, EET/CPE 2350 Advanced Technical Programming, EET/CPE 3330 Digital Circuits/Systems II，EET/CPE 4020 Digital Circuits/Systems III, CPE 4600 VLSI Circuits and Systems.</li>
                <li>2017.08 - 2021.05, University of Colorado Denver, ELEC 4561 Hardware and Software Interface, ELEC 2531 Logic Lab.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2022 Yan Pang. All rights reserved</div>
          <div>(Last update: Aug 15, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
