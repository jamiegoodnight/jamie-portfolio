import React from 'react';
import ReactPlayer from 'react-player';
import Loader from 'react-loader-spinner';

import './App.css';

class App extends React.Component {
  // state = {
  //   load: true
  // };
  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       ...this.state,
  //       load: false
  //     });
  //   }, 1000);
  // };
  render() {
    // if (this.state.load === true) {
    //   return (
    //     <div>
    //       <Loader type='Grid' color='white' height={400} width={400} />
    //     </div>
    //   );
    // }
    return (
      <div className='App'>
        <div className='image-wrapper fadesite'>
          <div className='row'>
            <div className={`${'two'} ${'no-overflow'}`}>
              <div className={`${'item-two'}`}>
                <div className='nav-wrapper'>
                  <a
                    href='https://github.com/jamiegoodnight'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i class='fab fa-github-square fade'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/jamiegoodnight/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i class='fab fa-linkedin fade2'></i>
                  </a>
                  <a
                    href='https://jamiegoodnight.typeform.com/to/IPmtRL'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i class='fas fa-envelope fade3'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${'one'} ${'no-overflow'}`}>
              <a
                href='https://github.com/Lambda-School-Labs/key-conservation-mobile'
                target='_blank'
                rel='noopener noreferrer'
                className='key-a'
              >
                <div className={`${'item-one'} ${'zoom'}`}>
                  {' '}
                  <p className='key-p'>KEY/FRONT-END</p>
                  {/* <i class='fas fa-chevron-circle-right chev-black'></i> */}
                </div>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className={`${'six'} ${'no-overflow'}`}>
              <a
                href='https://github.com/jamiegoodnight/guidr'
                target='_blank'
                rel='noopener noreferrer'
                className='guidr-a'
              >
                <div className={`${'item-six'} ${'zoom'}`}>
                  <p className='guidr-p'>GUIDR</p>
                  {/* <i class='fas fa-chevron-circle-right chev-white'></i> */}
                </div>
              </a>
            </div>
            <div className={`${'four'} ${'no-overflow'}`}>
              <a
                href='https://github.com/jamiegoodnight/usemytech-be'
                target='_blank'
                rel='noopener noreferrer'
                className='tech-a'
              >
                <div className={`${'item-four'} ${'zoom'}`}>
                  <p className='tech-p'>
                    USE
                    <br /> MY
                    <br /> TECH
                  </p>
                </div>
              </a>
            </div>
            <div className={`${'five'} ${'no-overflow'}`}>
              <a
                href='https://github.com/jamiegoodnight/dark-mode'
                target='_blank'
                rel='noopener noreferrer'
                className='dark-a'
              >
                <div className={`${'item-five'} ${'zoom'}`}>
                  <p className='dark-p'>DARK MODE</p>
                </div>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='vid-wrapper no-overflow'>
              <a
                href='https://youtu.be/TNtvKCUwNT4'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ReactPlayer
                  url='https://youtu.be/TNtvKCUwNT4'
                  className='vid'
                />
                <div className={'mobile-key zoom'}></div>
              </a>
            </div>
            <div className='vid-wrapper-two no-overflow'>
              <a
                href='https://youtu.be/oJSmAoSdx8w'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ReactPlayer
                  url='https://youtu.be/oJSmAoSdx8w'
                  className='vid'
                />
                <div className={'mobile-game zoom'}></div>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className={`${'eight'} ${'no-overflow'}`}>
              <a
                href='https://github.com/Lambda-School-Labs/key-conservation-be'
                target='_blank'
                rel='noopener noreferrer'
                className='keyback-a'
              >
                <div className={`${'item-eight'} ${'zoom'}`}>
                  <p className='keyback-p'>KEY/BACK-END</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import ReactPlayer from 'react-player';
// import Loader from 'react-loader-spinner';

// import './test.css';

// class App extends React.Component {
//   state = {
//     one: true,
//     two: false,
//     three: false,
//     four: false,
//     five: false,
//     six: false,
//     seven: false,
//     eight: false
//   };
//   // componentDidMount = () => {
//   //   setTimeout(() => {
//   //     this.setState({
//   //       ...this.state,
//   //       load: false
//   //     });
//   //   }, 1000);
//   // };
//   right = e => {
//     if (this.state.one === true) {
//       this.setState({
//         ...this.state,
//         one: false,
//         two: true
//       });
//     }
//     if (this.state.two === true) {
//       this.setState({
//         ...this.state,
//         two: false,
//         three: true
//       });
//     }
//     if (this.state.three === true) {
//       this.setState({
//         ...this.state,
//         three: false,
//         four: true
//       });
//     }
//     if (this.state.four === true) {
//       this.setState({
//         ...this.state,
//         four: false,
//         five: true
//       });
//     }
//     if (this.state.five === true) {
//       this.setState({
//         ...this.state,
//         five: false,
//         six: true
//       });
//     }
//     if (this.state.six === true) {
//       this.setState({
//         ...this.state,
//         six: false,
//         one: true
//       });
//     }
//   };
//   left = e => {};
//   render() {
//     // if (this.state.load === true) {
//     //   return (
//     //     <div>
//     //       <Loader type='Grid' color='white' height={400} width={400} />
//     //     </div>
//     //   );
//     // }
//     return (
//       <div className='App'>
//         <div className='image-wrapper fadesite'>
//           <div className={`${'two'} ${'no-overflow'} {}`}>
//             <div
//               className={
//                 this.state.one === true
//                   ? 'item-two'
//                   : this.state.two === true
//                   ? 'item-one'
//                   : this.state.three === true
//                   ? 'item-eight'
//                   : this.state.four === true
//                   ? 'item-four'
//                   : this.state.five === true
//                   ? 'item-six'
//                   : this.state.six === true
//                   ? 'item-five'
//                   : null
//               }
//               onClick={e => this.right()}
//             >
//               <div className='nav-wrapper'>
//                 <a
//                   href='https://github.com/jamiegoodnight'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   <i
//                     className={
//                       this.state.two === true
//                         ? 'fab fa-github-square fade black-instead'
//                         : 'fab fa-github-square fade'
//                     }
//                   ></i>
//                 </a>
//                 <a
//                   href='https://www.linkedin.com/in/jamiegoodnight/'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   <i
//                     className={
//                       this.state.two === true
//                         ? 'fab fa-linkedin fade2 black-instead'
//                         : 'fab fa-linkedin fade2'
//                     }
//                   ></i>
//                 </a>
//                 <a
//                   href='https://jamiegoodnight.typeform.com/to/IPmtRL'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   <i
//                     className={
//                       this.state.two === true
//                         ? 'fas fa-envelope fade3 black-instead'
//                         : 'fas fa-envelope fade3'
//                     }
//                   ></i>
//                 </a>
//                 <a
//                   href='https://jamiegoodnight.typeform.com/to/IPmtRL'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   <i
//                     className={this.state.two === true && 'fab fa-youtube'}
//                   ></i>
//                 </a>
//               </div>
//               <h1>UNDE</h1>
//               <h1>RCON</h1>
//               <h1>STRU</h1>
//               <h1>CTIO</h1>
//               <h1>N</h1>
//               <p>
//                 click the arrow and—keep clicking—to check out some of my work!
//               </p>
//               {/* <i class='fas fa-mouse-pointer'></i>
//               <i class='far fa-circle'></i> */}
//               {/* <i class='fas fa-chevron-right'></i> */}
//               {/* <div className='project-wrapper'>
//                 <div className='project'></div>
//                 <div className='project'></div>
//                 <div className='project'></div>
//                 <div className='project'></div>
//                 <div className='project'></div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
