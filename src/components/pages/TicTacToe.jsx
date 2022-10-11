import React, { Component, createContext, useContext } from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { useLocation } from 'react-router-dom'

import { GlobalConsumer, GContext } from '../contexts/GlobalContext'

import Aos from 'aos'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faX, faO } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ColComp from '../sections/ttt/ColComp'

const Context = createContext();


export default class TicTacToe extends Component {

  constructor(props){
    // must initialized when call constructor
    super(props)

    console.log('el');

    // props.context.changeState({
    //   root : {backgroundColor : '#14bdac'}
    // })
  }

  state = {
    col : [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    colWinner : [], // array of index columns winner,
    whoWinner : null, // the winner
    playOff : {
      human : {
        winCount : 0,
      },
      computer : {
        winCount : 0
      },
      draw : 0,
      gameCount : 1
    },
    inGame : {
      whoTurn : 'human',
      statusGameOver : false,
    }
  }

  matchWinner = ()=>{
    console.warn('start match winner')

    const col = this.state.col
    let playOff = this.state.playOff
    let inGame = this.state.inGame

    // if(statusGameOver){
      const combination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
  
      
  
      let colWinner = false
      let whoWinner = null
      let statusDraw = false
      let allFilled = col.every(el=> el!==undefined)
      let statusGameOver = false
  
      for(let i=0; i<combination.length; i++){
        let humanWin = combination[i].every((el)=> (col[el]!==undefined && col[el]===true))
        let computerwin = combination[i].every((el)=> (col[el]!==undefined && col[el]===false))
        let status = humanWin || computerwin
        
        if(!status && (i===combination.length-1) && allFilled){
          statusDraw = true
        }

        if(status){
          colWinner = i
          whoWinner = col[combination[colWinner][0]] === true ? 'human' : 'computer'
  
          break
        }
  
      }

      if(['human', 'computer'].includes(whoWinner) || allFilled)
        statusGameOver = true;
      
      
      let winCount = whoWinner==='human'? (this.state.playOff.human.winCount+1) : this.state.playOff.computer.winCount+1
      winCount = statusDraw && winCount-1
  
      this.setState(()=> {
        let data = {};
        if(statusGameOver){
          if(!statusDraw && whoWinner==='human'){
            playOff.human = {
              winCount : winCount
            }
          }else if(!statusDraw && whoWinner==='computer'){
            playOff.computer = {
              winCount : winCount
            }
          }else if(statusDraw){
            ++playOff.draw
          }
  
          ++playOff.gameCount

          data.colWinner = combination[colWinner]
          data.whoWinner = whoWinner
          data.inGame = inGame
          
          inGame.statusGameOver = statusGameOver

          return data;
        }    
      })
    // }   

    console.warn('done match winner')
  }

  resetGame = ()=>{
    
  }

  resetMatch = ()=>{
    let state = this.state

    let col = state.col
    col.fill(undefined, 0, col.length-1)

    const colWinner = []
    const whoWinner = null
    const inGame = {
      whoTurn : 'human'
    }

    this.setState(()=>{
      return {
        col : col,
        colWinner : colWinner,
        whoWinner : whoWinner,
        inGame : inGame
      };
    })
  }

  computerTurn = ()=>{
    let col = this.state.col

    let emptyCol = []

    col.forEach((el, idx)=>{
      if(el===undefined)
        emptyCol[emptyCol.length] = idx
    })

    const rand = this.getRandomArrayIndex(this.state.col, emptyCol)
    console.log('rand', rand)

    col[rand] = false

    this.setState(()=>{
      return {col : col}
    })

    this.matchWinner()
  }

  humanTurn = (e, id) => {
    let col = this.state.col
    console.log('human', e, id)

    let status = Boolean(e.target.attributes['data-click'].value )
    console.log(status)

    if(status){
      col[id] = true

      this.setState(()=>{
        return {col : col};
      })

      setTimeout(this.computerTurn, 500)
    }

  }

  getRandomArrayIndex = (arr, checkIfCan=[])=>{
    let rand;

    let status = true
    while (status && checkIfCan.length>0){
      rand = Math.floor(Math.random() * 10)

      if(checkIfCan.includes(rand))
        status = false
    }

    return rand;
  }

  componentDidMount(){
    // console.log(this._Mounted)
    
    Aos.init()

    // GContext.Consumer.changeState({root:{backgroundColor : '#000'}});
    // this.computerTurn()

    console.log(this.context, this)


    // NOTE lihat catatan bawah selengkapnya
    // this.context.changeState({
    //   root : {backgroundColor : '#14bdac'}
    // })

  }

  componentWillUnmount(){
    this.context.changeState({
      root : {backgroundColor : '#fff'}
    })
  }
  
  

  divCont = styled.div`
      background-color : #14bdac;
  `;

  render() {

    return (
      <GlobalConsumer>
        {
          (value)=>{
            console.log(value)
            
            // value.changeState({
            //   root : {backgroundColor : '#0da192'}
            // })

            return (
              <main id="main" style={{ minHeight: '100vh' }}>
                <Context.Provider value={{ winner: this.state.colWinner }}>
                <section className="section">
                  <this.divCont className="container">
                    <div className="row" style={{ 
                      marginBottom: '60px'
                    }}>
                      <div className="col">
                        
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mx-auto" id="content-tt">
                        <div className="row" >
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[0]===true || this.state.col[0]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=> this.humanTurn(e, 0)} >
                              <ColComp col={this.state.col[0]} key={0} id={0}/>
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[1]===true || this.state.col[1]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=> this.humanTurn(e, 1)} >
                            <ColComp col={this.state.col[1]} key={1} id={1} />
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[2]===true || this.state.col[2]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 2)}} >
                            <ColComp col={this.state.col[2]} key={2} id={2} />
                          </div>
                        </div>
                        <div className="row" >
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[3]===true || this.state.col[3]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 3)}} >
                            <ColComp col={this.state.col[3]} key={3} id={3}/>
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[4]===true || this.state.col[4]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 4)}} >
                            <ColComp col={this.state.col[4]} key={4} id={4}/>
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[5]===true || this.state.col[5]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 5)}} >
                            <ColComp col={this.state.col[5]} key={5} id={5}/>
                          </div>
                        </div>
                        <div className="row" >
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[6]===true || this.state.col[6]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 6)}} >
                            <ColComp col={this.state.col[6]} key={6} id={6}/>
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[7]===true || this.state.col[7]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 7)}} >
                            <ColComp col={this.state.col[7]} key={7} id={7}/>
                          </div>
                          <div className="col col-tt-default d-flex justify-content-center align-items-center" data-click={(this.state.col[8]===true || this.state.col[8]===false || this.state.inGame.statusGameOver) ? '' : true} onClick={(e)=>{this.humanTurn(e, 8)}}>
                            <ColComp col={this.state.col[8]} key={8} id={8}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </this.divCont>
                </section>
                </Context.Provider>
              </main>
            )
          }
        }
      </GlobalConsumer>
      
    )
  }
}

// ini cara agar bisa akses function context di luar method render class component karena tidak bisa use useContext function
TicTacToe.contextType = GContext

export {Context};
