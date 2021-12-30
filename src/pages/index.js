import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    author: "Yan Pang, Chao Liu",
    title: "Efficient-Dyn: Dynamic Graph Representation Learning via Event-based Temporal Sparse Attention Network",
    jounal: "International Conference on Machine Learning",
    paper: "",
    img: "",
    abstract: "Static graph neural networks have been widely used in modeling and representation learning of graph structure data. However, many real-world problems, such as social networks, financial transactions, recommendation systems, etc., are dynamic, that is, nodes and edges are added or deleted over time. Therefore, in recent years, dynamic graph neural networks have received more and more attention from researchers. In this work, we propose a novel dynamic graph neural network, Efficient-Dyn. It adaptively encodes temporal information into a sequence of patches with an equal amount of temporal-topological structure. Therefore, while avoiding the use of snapshots to cause information loss, it also achieves a finer time granularity, which is close to what continuous networks could provide. In addition, we also designed a lightweight module, Sparse Temporal Transformer, to compute node representations through both structural neighborhoods and temporal dynamics. Since the fully-connected attention conjunction is simplified, the computation cost is far lower than the current state-of-the-arts. Link prediction experiments are conducted on both continuous and discrete graph datasets. Through comparing with several state-of-the-art graph embedding baselines, the experimental results demonstrate that Efficient-Dyn has a faster inference speed while having competitive performance.",
   },
   {
    author: "Yan Pang, Chao Liu",
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    jounal: "International Conference on Machine Learning",
    paper: "",
    img: "",
    abstract: "Graph neural networks can be effectively applied to find solutions for many real-world problems across widely diverse fields. The success of graph neural networks is linked to the message-passing mechanism on the graph, however the message-aggregating behavior is still not entirely clear in most algorithms. To improve functionality, we propose a new transparent network called Graph Decipher to investigate the message-passing mechanism by prioritizing in two main components: the graph structure and node attributes, at the graph, feature, and global levels on a graph under the node classification task. However the computation burden now becomes the most significant issue because the relevance of both graph structure and node attributes are computed on a graph. In order to solve this issue, only relevant representative node attributes are extracted by graph feature filters, allowing calculations to be performed in a category-oriented manner. Experiments on seven datasets show that Graph Decipher achieves state-of-the-art performance while imposing a substantially lower computation burden under the node classification task. Additionally, since our algorithm has the ability to explore the representative node attributes by category, it is utilized to alleviate the imbalanced node classification problem on multi-class graph datasets.",
   },
  {
    author: "Vijay Harid, Chao Liu, Yan Pang, Akimun Jannat Alvina, Mark Golkowski, Poorya Hosseini, Morris Cohen",
    title: "Automated Large‐Scale Extraction of Whistlers Using Mask‐Scoring Regional Convolutional Neural Network",
    jounal: "Geophysical Research Letters",
    paper: "https://doi.org/10.1029/2021GL093819",
    img: "https://agupubs.onlinelibrary.wiley.com/cms/asset/515d4c0d-3b76-4c45-8e6f-8d3e5639b394/grl62811-fig-0001-m.jpg",
    abstract: "Extremely and very low frequency (ELF/VLF) radio waves are generated from a variety of natural geophysical sources. Ground-based observations often contain signals of interest; however, the signals are typically immersed in a noisy environment due to lightning-generated sferics and additional anthropogenic sources. Although automated detection algorithms have been employed successfully in the past, extraction of arbitrary and broadband signal classes has been a challenge. In this work, we employ a mask-scoring regional convolutional neural network (MSRCNN) for automated extraction of whistlers from ground measurements at Palmer station, Antarctica. Statistics of several hundred thousand whistler receptions are evaluated to determine seasonal and diurnal variations at Palmer station along with strong correlations to lightning activity in the conjugate hemisphere. Although MSRCNN has been employed for whistler extraction in this work, the method has can be easily extended to other signal classes including chorus, hiss, and VLF triggered emissions.",
  },
  {
    author: "Yan Pang, Yeyin Shi, Shancheng Gao, Feng Jiang, Arun-Narenthiran Veeranampalayam-Sivakumar, Laura Thompson, Joe Luck, Chao Liu",
    title: "Improved crop row detection with deep neural network for early-season maize stand count in UAV imagery",
    jounal: "Computers and Electronics in Agriculture",
    paper: "https://doi.org/10.1016/j.compag.2020.105766",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0168169920311376-gr1.jpg",
    abstract: "Stand counts is one of the most common ways farmers assess plant growth conditions and management practices throughout the season. The conventional method for early-season stand count is through manual inspection, which is time-consuming, laborious, and spatially limited in scope. In recent years, Unmanned Aerial Vehicles (UAV) based remote sensing has been widely used in agriculture to provide low-altitude, high spatial resolution imagery to assist decision making. In this project, we designed a system that uses geometric descriptor information with deep neural networks to determine early-season maize stands from relatively low spatial resolution (10 to 25 mm) aerial data, which covers a relatively large area (10 to 25 hectares). Instead of detecting individual crops in a row, we process the entire row at one time, which significantly reduces the requirements for the clarity of the crops. Besides, our new MaxArea Mask Scoring RCNN algorithm could segment crop-rows out in each patch image, regardless of the terrain conditions. The robustness of our scheme was tested on data collected at two different fields in different years. The accuracy of the estimated emergence rate reached up to 95.8%. Due to the high processing speed of the system, it has the potential for real-time applications in the future.",
  },
  {
    author: "Yan Pang, Jake Christenson, Feng Jiang, Tim Lei, Remy Rhoades, Drew Kern, John A Thompson, Chao Liu",
    title: "Automatic detection and quantification of hand movements toward development of an objective assessment of tremor and bradykinesia in Parkinson's disease",
    jounal: "Journal of neuroscience methods",
    paper: "https://doi.org/10.1016/j.jneumeth.2019.108576",
    img: "https://ars.els-cdn.com/content/image/1-s2.0-S0165027019304339-gr7.jpg",
    abstract: "Classification of parkinsonian symptoms, including tremor and bradykinesia, require the application of validated clinical rating scales which are inherently subjective. In this study, we assessed an objective measure of parkinsonian symptomology using automated analysis of hand gestures. We constructed and evaluated a hand and finger motion capture apparatus and analysis pipeline that recorded hand/finger motion of control subjects and patients with Parkinson's disease. The detailed three-dimensional (3D) motion features of each finger joint was extracted by using Discrete Wavelet Transform (DWT). The severity of tremor for each finger joint was quantitated by analyzing the motion changes in the frequency domain on four types of motion from five patients and twenty-two control subjects. The proposed approach could distinguish the behavior of patients with Parkinson's disease and control subjects by analyzing the detailed motion features of their hands/fingers. Previously established methods to quantitate finger movement dynamics focus on speed and amplitude. In contrast, our approach measures unsupervised motion features, in real-time, using wavelet analysis, of each individual finger joint during active free movement. The proposed study provides an objective assessment of tremor and bradykinesia in Parkinson's disease. Accordingly, this may help movement disorder clinicians to detect, diagnose and monitor treatment efficacy in Parkinson's disease.",
  },
  {
    author: "Feng Jiang, Yan Pang, ThienNgo N Lee, Chao Liu",
    title: "Automatic object segmentation based on grabcut",
    jounal: "Science and Information Conference",
    paper: "https://doi.org/10.1007/978-3-030-17795-9_25",
    img: "https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-3-030-17795-9_25/MediaObjects/473237_1_En_25_Fig3_HTML.png",
    abstract: "Object segmentation is used in multiple image processing applications. It is generally difficult to perform the object segmentation fully automatically. Most object segmentation schemes are developed based on prior information, training process, existing annotation, special mechanical settings or the human visual system modeling. We proposed a fully automatic segmentation method not relying on any training/learning process, existing annotation, special settings or the human visual system. The automatic object segmentation is accomplished by an objective object weight detection and modified GrabCut segmentation. The segmentation approach we propose is developed only based on the inherent image features. It is independent with various datasets and could be applied to different scenarios. The segmentation result is illustrated by testing a large dataset."
    },

]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black	h-12 text-white">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-12 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">Yan Pang</div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#publications">Publications</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#interests">Research Interests</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#news">News</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#educations">Educations</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#teaching">Teaching Experiences</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5 py-16">

          <div className="flex flex-row ">
            <div className="">
              <img className="w-60" src="https://filescdn.proginn.com/ae24d822192b900082c72e4ad2460de7/ae6cdee2964ea960efb84b922e2475a0.webp"></img>
            </div>
            <div className="flex-1 ml-3">
              <p className="font-semibold text-sm" >
              I am currently a machine learning scientist in Moffett AI, San Jose, CA. Prior to Moffett, I was fortunate to be a Ph.D student in University of Colorado (2017-2021), advised by Prof. Chao Liu. My research interests span machine learning, computer vision, efficient deep learning, etc.
              </p>
              <p className="mt-3">
              From Aug. 2017 to May 2021, I was an <b>instructor</b> in Department of Electrical Engineering at University of Colorado Denver. From Aug. 2018 to May 2021, I was a <b>instructor</b> in Department of Department of Engineering and Engineering Technology at Metropolitan State University of Denver. My responsibility was to design and teach courses and labs related to computer engineering and electrical engineering. Started from Jan. 2021, I has been employed as an <b>senior instructor</b> at JulyEdu. My online courses relate to deep learning for computer vision, et al. 
              </p>
            </div>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <div> 949 Sherwood Ave, Suite 200, Los Altos, CA 94022</div>
            <div>Email: yanpangee@gmail.com | pang.yan@moffett.ai</div>
          </div>

          <div id="interests"></div>
          <div className="mt-12">
            <div className="text-blue-800	text-xl font-bold">Research Interests</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision. Specifically, I focus on </p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Graph Neural Networks</li>
                <li>Object Detection</li>
                <li>Key Points Detection</li>
                <li>Multimodal Learning</li>
                <li>Knowledge Distillation</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>

          <div id="news"></div>
          <div>
            <div className="text-blue-800	text-xl font-bold">News</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[Jan 20, 2022] <b>NEW:</b> Submitted two papers to ICML 2022.</li>
                <li>[Dec 18, 2021] Received my Ph.D. degree.</li>
                <li>[August 1, 2021] One paper published to Journal of Geophysical Research Letters. </li>
                <li>[April 12, 2021] Joined Moffett AI</li>
                <li>[Nov 1, 2020] One paper published to Journal of Computers and Electronics in Agriculture. </li>
                <li>[March 1, 2020] One paper published to Journal of neuroscience method. </li>
              </ul>
            </div>
          </div>

          <div id="educations"></div>
          <div>
            <div className="text-blue-800	text-xl font-bold">Educations</div>
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
            <div className="text-blue-800	text-xl font-bold">Recent Publications</div>
            <div className="py-3">
              <div className="flex flex-row flex-wrap items-center">
                <div>
                  <img className="w-36" src="http://zhiqiangshen.com/projects/FKD/FKD.png"></img>
                </div>
                <div className="ml-5">
                  <div>Zhiqiang Shen, Eric Xing.</div>
                  <div className="font-bold">A Fast Knowledge Distillation Framework for Visual Recognition</div>
                  <div>Technical report.</div>
                  <div>Project Page  |  Code & Models  |  arXiv Paper</div>
                </div>
              </div>
            </div>
          </div>

          
          <div id="teaching"></div>
          <div>
            <div className="text-blue-800	text-xl font-bold">Teaching Experiences</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2020.01 - Present, JulyEdu, couses include advanced course of computer vision, graph neural networks, object detection, human pose estimation, object tracking, SLAM, C++, et al.</li>
                <li>2018.08 - 2021.05, Metropolitan State University of Denver, EET/CPE 2350 Advanced Technical Programming, EET/CPE 3330	Digital Circuits/Systems II，EET/CPE 4020 Digital Circuits/Systems III, CPE 4600 VLSI Circuits and Systems.</li>
                <li>2018.08 - 2021.05, University of Colorado Denver, ELEC 4561 Hardware and Software Interface, ELEC 2531 Logic Lab.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2022 Yan Pang. All rights reserved</div>
          <div>(Last update: Jan 20, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage