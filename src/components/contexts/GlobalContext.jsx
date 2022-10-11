import React, { Component, createContext } from 'react';

const GContext = createContext(
    // {
    //     root : {
    //         backgroundColor : '#fff'
    //     }
    // }
)
// console.log(GContext)

class GlobalProvider extends Component {
    state = {
        root : {
            backgroundColor : '#fff'
        }
    };

    changeState = (data)=>{
        console.log('changeState', data)

        this.setState(()=> {
            console.log('setState', data)

            return data
            // return {
            //     root : {
            //         backgroundColor : '#14bdac'
            //     }
            // }
        })

        // console.log()
        this.changeBgRoot()
    }

    changeBgRoot = ()=>{
        console.log('changeBgRoot', this.state)
        console.log(document.getElementById('root'))

        document.getElementById('root').style.backgroundColor = this.state.root.backgroundColor;
        // document.getElementById('root').style.backgroundColor = '#000000';
    }
    
    render() {
        console.log(this.state)

        return (
            <GContext.Provider value={{ ...this.state, changeState: this.changeState }}>
                {this.props.children}
            </GContext.Provider>
        );
    }
}

// export default GlobalContext;

// console.log(GlobalProvider)

const GlobalConsumer = GContext.Consumer;
// console.log(GlobalConsumer)
export { GlobalProvider, GlobalConsumer, GContext };


