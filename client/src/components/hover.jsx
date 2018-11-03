import React from 'react';


// function Hover(props) {
//   props.hovers.map((hoverData) => {
//   return (
//     <div className="hover-container">
//         <div className="hover-box">
//           <h5>Here's what people are saying:</h5>
//           <div className="hover-box-top">
//             <ul>
//               <li>{hoverData.hover.percentWasGood}</li>
//               <li>{hoverData.hover.percentOnTime}</li>
//               <li>{hoverData.hover.percentAccuracy}</li>
//             </ul>
//           </div>
//           <div className="hover-user-card">
//             <div className="hover-avatar">{hoverData.hover.userProfile}</div>
//             <div className="hover-user-profile">{hoverData.hover.userName}</div>
//             <div className="hover-review">{hoverData.hover.featuredReview}</div>
//           </div>
//         </div>
//     </div>
//   )
//   })
// }


class Hover extends React.Component {
  render () {
    const hover = (
      <div className="hover-container">
        {this.props.hovers.map((hoverData) => {
          <div className="hover-box"> Test
            <h5>Here's what people are saying:</h5>
            <div className="hover-box-top">
              <ul>
                <li>{hoverData.hover.percentWasGood}</li>
                <li>{hoverData.hover.percentOnTime}</li>
                <li>{hoverData.hover.percentAccuracy}</li>
              </ul>
            </div>
            <div className="hover-user-card">
              <div className="hover-avatar">{hoverData.hover.userProfile}</div>
              <div className="hover-user-profile">{hoverData.hover.userName}</div>
              <div className="hover-review">{hoverData.hover.featuredReview}</div>
            </div>
          </div>
        })}
      </div>
    )
    return (
      <div className="hover-test">
        {hover}
      </div>
    );
  }
}

export default Hover;