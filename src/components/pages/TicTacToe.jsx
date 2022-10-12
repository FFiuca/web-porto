import React, { Component, createContext, useCallback, useContext, useMemo } from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { useLocation } from 'react-router-dom'

import { GlobalConsumer, GContext } from '../contexts/GlobalContext'

import Aos from 'aos'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faX, faO, faPlay, faRepeat, faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal, ModalDialog, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

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
      statusDraw : false
    },
    modal : {
      mdEnd : {
        status : false
      }
    }
  }

  matchWinner = ()=>{
    console.warn('start match winner')

    console.log(this.state)

    const col = this.state.col
    let playOff = this.state.playOff
    let inGame = this.state.inGame

    // if(inGame.statusGameOver){
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
          whoWinner = (col[combination[colWinner][0]] === true) ? 'human' : 'computer'

          console.log('whoWinner', whoWinner)
  
          break
        }
  
      }

      if(['human', 'computer'].includes(whoWinner) || allFilled)
        statusGameOver = true;
      
      
      let winCount = (whoWinner==='human')? (playOff.human.winCount+1) : (playOff.computer.winCount+1)
      winCount = statusDraw ? winCount-1 : winCount

      console.log('winCount', winCount)
  
      this.setState((a)=> {
        console.log('a',a)

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
            playOff.draw += 1
          }
  
          playOff.gameCount += 1

          data.colWinner = combination[colWinner]
          data.whoWinner = whoWinner
          data.inGame = inGame
          data.playOff = playOff
          
          inGame.statusGameOver = statusGameOver
          inGame.statusDraw = statusDraw

          this.modalShow()
          
          console.log('Game Over', data)

          return data;
        }

        return {};
      })
    // }   

    console.warn('done match winner')
  }

  resetGame = ()=>{
    this.resetMatch()
    
    let playOff = this.state.playOff

    playOff.human.winCount = 0
    playOff.computer.winCount = 0
    playOff.gameCount = 1
    playOff.draw = 0

    this.setState(()=>{
      return {
        playOff : playOff
      }
    })
  }

  resetMatch = ()=>{
    let state = this.state

    let col = state.col
    col.fill(undefined, 0, col.length)

    const colWinner = []
    const whoWinner = null
    const inGame = {
      whoTurn : 'human',
      statusGameOver : false,
      statusDraw : false
    }

    this.setState(()=>{
      return {
        col : col,
        colWinner : colWinner,
        whoWinner : whoWinner,
        inGame : inGame
      };
    })

    this.modalHide()
  }

  computerTurn = ()=>{
    if(!this.state.inGame.statusGameOver){
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
      
      // use memo and callback no needed when use class component
      // useMemo(()=>{
        this.matchWinner()
      // }, [])
  
    }

    console.log('aftet check win', this.state)
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
    //   root : {backgroundColor : '#fff'}
    // })

    // this.context.changeState({
    //   root : {backgroundColor : '#14bdac'}
    // })
  }

  componentWillUnmount(){
    // this.context.changeState({
    //   root : {backgroundColor : '#fff'}
    // })

    // this.context.changeState({
    //   root : {backgroundColor : '#14bdac'}
    // })
  }

  componentDidUpdate(){
    // this.matchWinner()
  }

  modalHide = ()=>{ this.setState(()=>{
    let modal = this.state.modal
    modal.mdEnd.status = false

    return {
      modal : modal
    } 
  })}

  modalShow = ()=>{ this.setState(()=>{
    let modal = this.state.modal
    modal.mdEnd.status = true

    return {
      modal : modal
    } 
  })}
  
  

  divCont = styled.div`
      background-color : #14bdac;
      border-radius : 20px;
      // top : 50%;
      // left : 50%;
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
                <Context.Provider value={{ winner: this.state.colWinner, inGame: this.state.inGame }}>
                <section className="section">
                  <this.divCont className="container">
                    <div className="row" style={{ 
                      marginBottom: '60px'
                    }}>
                      <div className="col text-center">
                        <h4 style={{ 
                          fontFamily : "'Bungee Spice', cursive",
                          fontSize : '102px',
                          textShadow : '-8px 8px black'
                         }}>TIC TAC TOE</h4>
                         <span style={{ 
                            fontFamily : '"Nova Flat", cursive',
                            fontSize : '50px',
                            color : '#61867F'
                          }}>THE GAME</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-7 mx-auto" id="content-tt">
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
                      <div className="col-md-1 d-md-block d-sm-none">
                        <div className="row" style={{ height: '100%' }}>
                          <div className="col d-flex justify-content-end align-items-center align-content-center" style={{ height : '100%' }}>
                            <Button onClick={this.resetGame} style={{ backgroundColor: '#EE805A', borderColor: '#EE805A', boxShadow:'black -6px 5px 0px 0px' }}>
                              <FontAwesomeIcon icon={faRepeat} size="4x"></FontAwesomeIcon>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="row">
                              <div className="col-12 text-center text-game">
                                Human Win
                              </div>
                              <div className="col-12 text-center text-game">
                                {this.state.playOff.human.winCount}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="row">
                              <div className="col-12 text-center text-game">
                                Computer Win
                              </div>
                              <div className="col-12 text-center text-game">
                                {this.state.playOff.computer.winCount}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="row">
                              <div className="col-12 text-center text-game">
                                Draw
                              </div>
                              <div className="col-12 text-center text-game">
                                {this.state.playOff.draw}
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
            
                  </this.divCont>
                </section>
                </Context.Provider>

                <Modal show={this.state.modal.mdEnd.status} onHide={this.modalHide} animation={true} centered>
                  <Modal.Body className="d-flex justify-content-center align-items-center">
                    <Button onClick={this.resetMatch} style={{ backgroundColor: '#EE805A', borderColor: '#EE805A', boxShadow:'black -6px 5px 0px 0px' }}>
                      <FontAwesomeIcon icon={faPlay} size="4x"/>
                      <h5 className="text-game"> Play Again</h5>
                    </Button>
                  </Modal.Body>
                </Modal>

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
