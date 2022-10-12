import React, { Component, useContext } from 'react';
import App from './App';

import { GlobalProvider, GlobalConsumer } from './components/contexts/GlobalContext';


class Index2 extends Component {
    
    render() {
        return (
            // Context untuk pemanggilan consumer, harus didalam context provider
            <GlobalProvider>

            

                {/* <React.StrictMode>  */}
                    <GlobalConsumer>
                                {
                                    (value)=>{

                                        return (
                                            <App />
                                        )
                                    }
                                }
                            
                    </GlobalConsumer>      
                {/* </React.StrictMode>     */}
            </GlobalProvider>
        );
    }
}

export default Index2;
