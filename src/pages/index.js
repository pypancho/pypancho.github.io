import * as React from "react"
// <a className="text-blue-600 text-sm" href={"https://github.com/pypancho/CV-Lectures"} target="_blank">Computer Vision Processing(181940016-1)</a>，
// <a className="text-blue-600 text-sm" href={"https://github.com/pypancho/Assembly-Lectures"} target="_blank">Assembly Language Processing(210600058-1).</a>
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    author: <div>Teng Huang, Yile Hong; <span className="font-bold">Yan Pang *</span>, Jiaming Liang, Jie Hong, Lin Huang, Yuan Zhang, Yan Jia, Patrizia Savi</div>,
    title: "AdaptFormer: An Adaptive Hierarchical Semantic Approach for Change Detection on Remote Sensing Images",
    jounal: "IEEE Transactions on Instrumentation and Measurement",
    paper: "https://doi.org/10.1109/TIM.2024.3387494",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Jiaming Liang, Teng Huang, Hao Chen, Yunhao Li, Dan Li, Lin Huang, Qiong Wang</div>,
    title: "Slim UNETR: Scale Hybrid Transformers to Efficient 3D Medical Image Segmentation Under Limited Computational Resources",
    jounal: "IEEE Transactions on Medical Imaging",
    paper: "https://doi.org/10.1109/TMI.2023.3326188",
  },
  {
    author: <div>Zhen Wang, Yang Zhang, <span className="font-bold">Yan Pang *</span>, Nannan Wang, Mohamed Jaward Bah, Ke Li, Ji Zhang</div>,
    title: "Toward Learning Joint Inference Tasks for IASS-MTS Using Dual Attention Memory With Stochastic Generative Imputation",
    jounal: "IEEE Transactions on Neural Networks and Learning Systems",
    paper: "https://doi.org/10.1109/TNNLS.2023.3305542",
  },
  {
    author: <div>Teng Huang, Jiahui Huang, <span className="font-bold">Yan Pang *</span>, Hongyang Yan</div>,
    title: "Smart Contract Watermarking Based on Code Obfuscation",
    jounal: "Information Sciences",
    paper: "https://doi.org/10.1016/j.ins.2023.01.126",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Ai Shan, Zhen Wang, Mengyu Wang, Jianwei Li, Ji Zhang, Teng Huang, Chao Liu </div>,
    title: "Sparse-Dyn: Sparse dynamic graph multirepresentation learning via event-based sparse temporal attention network",
    jounal: "International Journal of Intelligent Systems",
    paper: "https://doi.org/10.1002/int.22967",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Teng Huang, Zhen Wang, Jianwei Li, Poorya Hosseini, Ji Zhang, Chao Liu, Shan Ai </div>,
    title: "Graph Decipher: A transparent dual-attention graph neural network to understand the message-passing mechanism for the node classification",
    jounal: "International Journal of Intelligent Systems",
    paper: "https://doi.org/10.1002/int.22966",
  },
  {
    author: <div> Vijay Harid, Chao Liu, <span className="font-bold">Yan Pang</span>, Akimun Jannat Alvina, Mark Golkowski, Poorya Hosseini, Morris Cohen</div>,
    title: "Automated Large‐Scale Extraction of Whistlers Using Mask‐Scoring Regional Convolutional Neural Network",
    jounal: "Geophysical Research Letters",
    paper: "https://doi.org/10.1029/2021GL093819",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Yeyin Shi, Shancheng Gao, Feng Jiang, Arun-Narenthiran Veeranampalayam-Sivakumar, Laura Thompson, Joe Luck, Chao Liu</div>,
    title: "Improved crop row detection with deep neural network for early-season maize stand count in UAV imagery",
    jounal: "Computers and Electronics in Agriculture",
    paper: "https://doi.org/10.1016/j.compag.2020.105766",
  },
  {
    author: <div><span className="font-bold">Yan Pang</span>, Jake Christenson, Feng Jiang, Tim Lei, Remy Rhoades, Drew Kern, John A Thompson, Chao Liu </div>,
    title: "Automatic detection and quantification of hand movements toward development of an objective assessment of tremor and bradykinesia in Parkinson's disease",
    jounal: "Journal of neuroscience methods",
    paper: "https://doi.org/10.1016/j.jneumeth.2019.108576",
  },
  {
    author: <div> Akimun Jannat Alvina, Vijay Harid, Mark Golkowski, Chao Liu, Poorya Hosseini, <span className="font-bold">Yan Pang</span> </div>,
    title: "Source Characterization and Localization of Lightning Generated Whistlers Observed at Palmer Station",
    jounal: "AGU Meeting 2022",
    paper: "https://agu.confex.com/agu/fm22/meetingapp.cgi/Paper/1184878",
  },
  {
    author: <div>Feng Jiang, <span className="font-bold">Yan Pang</span>, ThienNgo N Lee, Chao Liu </div>,
    title: "Automatic object segmentation based on grabcut",
    jounal: "Science and Information Conference",
    paper: "https://doi.org/10.1007/978-3-030-17795-9_25",
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
              <a href="#presentations"> Invited Talks</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#teaching">Teaching Experiences</a>
            </div>
            <div className="mr-5 text-sm text-gray-300 hidden md:block">
              <a href="#students">Students</a>
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
              <p className="mt-3">
              <b>Associate professor</b> at the Institute of Artificial Intelligence at <b>Guangzhou University</b>, China. </p>
              <p className="mt-3">
              Dr. Pang received the Ph.D. degree from the University of Colorado in 2021. His research interests span <b>machine learning, computer vision, efficient deep learning</b>, etc.
              </p>
              <p className="mt-3">
              From April 2021 to May 2022, Dr. Pang was a machine learning scientist at Moffett AI, Los Altos, CA. From Aug. 2018 to May 2021, he was the instructor in Department of Electrical Engineering at University of Colorado Denver, and the Department of Electrical Engineering Technology at Metropolitan State University of Denver, US.
              </p>
              <div className="mt-3 text-xs text-gray-600">
                <div> <span className="font-bold">Address:</span> Guangzhou Higher Education Mega Center, Guangzhou 510006 China | <span className="font-bold">Email:</span> yanpang@gzhu.edu.cn</div>
              </div>
            </div>
          </div>

          <div id="interests" className="mt-12">
            <div className="text-blue-800 text-xl font-bold">Research Interests</div>
            <p className="text-sm">My research focuses on the broad areas of machine learning, deep learning and their applications on computer vision. Specifically, I focus on </p>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>Medical Image Analysis</li>
                <li>Graph Neural Networks</li>
                <li>Semantic Segmentation</li>
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
                <li>[Apr 21, 2024] <b>NEW:</b> One paper is published in the Journal of IEEE Transactions on Instrumentation and Measurement. (IF: 5.6).  <a className="text-blue-600 text-sm" href="https://github.com/aigzhusmart/AdaptFormer" target="_blank">Code</a> is released.</li>
                <li>[Oct 20, 2023] One paper is published in the Journal of IEEE Transactions on Medical Imaging. (IF: 10.6).  <a className="text-blue-600 text-sm" href="https://github.com/aigzhusmart/Slim-UNETR" target="_blank">Code</a> is released.</li>
                <li>[Aug 14, 2023] One paper is published in the Journal of IEEE Transactions on Neural Networks and Learning Systems. (IF: 10.4).</li>
                <li>[Feb 07, 2023] One paper published in the Journal of Information Sciences (IF: 8.233).</li>
                <li>[Jan 06, 2023] <b>NEW:</b> Become a topic editor of the "<a className="text-blue-600 text-sm" href="https://www.mdpi.com/topics/FLN51J9SH1" target="_blank">AI and Data-Driven Advancements in Industry 4.0</a>". Welcome to submit your papers on AI.</li>
                <li>[Aug 15, 2022] Joined to Guangzhou University, Guangdong.</li>
                <li>[Jul 25, 2022] Two papers published in the Journal of International Journal of Intelligent Systems （IF：8.993）.</li>
                <li>[Dec 18, 2021] Received my Ph.D. degree.</li>
                <li>[Aug 01, 2021] One paper published in the Journal of Geophysical Research Letters (IF: 5.58). </li>
                <li>[Apr 12, 2021] Joined to Moffett AI, Los Altos, CA.</li>
                <li>[Nov 01, 2020] One paper is published in the Journal of Computers and Electronics in Agriculture. </li>
                <li>[Mar 01, 2020] One paper is published in the Journal of Neuroscience Method. </li>
                <li>[Apr 24, 2019] One paper is accepted to Science and Information Conference</li>
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
                  <div className="md:ml-5 flex-1">
                    <div>{link.author}</div>
                    <div className="font-bold">{link.title}</div>
                    <div>{link.jounal}</div>
                    <div>
                      <a className="text-blue-600 text-sm" href={link.paper} target="_blank">Paper Link</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

           
          <div id="presentations">
            <div className="text-blue-800 text-xl font-bold">Invited Talks</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>[May 25th, 2024] Haikou, China:
                  <div>  
                      “Optimizing Medical Image Analysis: Boosting Model Performance with Integrated Software and Hardware Solutions.” International Conference on Digital Image Processing 2024;
                  </div>
                </li>
                    
                <li>[Apr 14, 2024] Hangzhou, China:
                  <div>  
                      “Improving Medical Image Analysis by Balancing Accuracy and Efficiency on Resource-Constrained Platforms”, The 3rd National Conference on Electronic Information Materials and Devices;
                  </div>
                </li>
                    
                <li>[Feb. 5th, 2024] Shenzhen, China:
                  <div>  
                      “Enhancing Medical Image Analysis by Achieving an Optimal Balance Between Accuracy and Efficiency in Resource-Limited Platforms”, 16th International Conference on Machine Learning and Computing;
                  </div>
                </li>

                <li>[Dec. 22nd, 2023] Shanghai, China:
                  <div>  
                      “Adaptive Hierarchical Semantic Approach for Change Detection”, The 9th International Conference on Signal Processing;
                  </div>
                </li>
                    
                <li>[Dec. 12th, 2023] Macao, China:
                  <div>  
                      “Optimizing Machine Learning Algorithms for Coordinated Software and Hardware Performance” University of Macao;
                  </div>
                </li>  

                <li>[Dec. 1st, 2023] Luoyang, China:
                  <div>  
                      “Application of Large-scale Model of Multimodal Medical Image Analysis” The First Affiliated Hospital of Henan University of Science & Technology;
                  </div>
                </li>  

                <li>[Jun. 7th, 2023] Zhuhai, China:
                  <div>  
                      “Adaptive Graph Representation Learning”, Sun Yat-Sen University;
                  </div>
                </li>  
                    
              </ul>
            </div>
          </div>         

              
          <div id="teaching">
            <div className="text-blue-800 text-xl font-bold">Teaching Experiences</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>2022.09 - Present. Guangzhou University:
                  <div>  
                        
                        Computer Vision Processing(181940016-1), Natural Language Processing(180600065-1)，Assembly Language Processing(210600058-1).
                        
                  </div>
                </li>
                <li>2018.08 - 2021.05, Metropolitan State University of Denver, EET/CPE 2350 Advanced Technical Programming, EET/CPE 3330 Digital Circuits/Systems II，EET/CPE 4020 Digital Circuits/Systems III, CPE 4600 VLSI Circuits and Systems.</li>
                <li>2017.08 - 2021.05, University of Colorado Denver, ELEC 4561 Hardware and Software Interface, ELEC 2531 Logic Lab.</li>
              </ul>
            </div>
          </div>


              
          <div id="students">
            <div className="text-blue-800 text-xl font-bold">Master Students</div>
            <div className="text-sm pl-10 py-3">
              <ul className="list-disc">
                <li>
                    <div>
                      <a className="text-blue-600 text-sm" href={"https://jeming-creater.github.io/"} target="_blank">Jiaming Liang</a>
                    </div>          
                </li>
                <li>
                  
                    <div>
                      <a className="text-blue-600 text-sm" href={"https://peterli.club/"} target="_blank">Yunhao Li</a>
                    </div>


                </li>
                <li>Jie Hong, Yile Hong, Hui Li, Mingwei Chen</li>
                <li>Yanjun Ming, Mingdu Zhang</li>
                </ul>
            </div>
        </div>

        </div>
        
        

        <div className="h-48 bg-gray-200 text-center pt-16 text-sm text-gray-500">
          <div>© 2024 Yan Pang. All rights reserved</div>
          <div>(Last update: Apr 11, 2024.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
