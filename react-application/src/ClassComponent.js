import React, { Component } from "react";

export class ClassComponent extends Component {
    render() {
        // complete Array destructure + Object rename

        const {
            arr: [a, b, c, d, { object: ahmad }],
        } = this.props;
        const { name, email, showName } = ahmad;
    
        const cities = [a, b, c, d];

        // ----------------------------------------------------------------

        //  destructing only object from array
        // const { arr:[,,,,{object:{name,email,showName}}]} = this.props;
        // console.log(name,email,showName);
        // --------------------------------------------------------

        // trynig to destructing complete array + object rename in a single line
        // const { arr:[a,b,c,d,{object: ahmad {name,email,showName}} ] }  = this.props;
        //   console.log(a,b,c,d);
        //   const { object :{name,email,showName} } = object;
        //   console.log(name,email,showName);
        // -----------------------------------

        // complete array destructing in a singleline

        //  const { arr:[a,b,c,d ,{object:{name,email,showName}} ] }  = this.props;

        console.log(this.props);

        return (
            <div style={{ textAlign: "center" }}>
                <h2>
                    Cities are
                    <br />
                    {cities.map((city,i) => <p key={i}>{city}</p>  )}
                </h2>
                <h4>
                    Name is {name} <br />
                    and
                    <br /> email is {email}
                </h4>
                <button className="btn btn-primary" onClick={showName}>
                    Click
                </button>
            </div>
        );
    }
}

export default ClassComponent;
