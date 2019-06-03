import React, {useState} from 'react'
import {
    useDialogState,
    Dialog,
    DialogDisclosure
  } from "reakit/Dialog"
import './style.scss'
import icon from './search.svg'

const SmallSearchForm = () =>
    <form className="small-search__form">
        <label className="visually-hidden" for="query">Search query</label>
        <input className="small-search__input" type="search" id="query" name="query" placeholder="Start typing..."></input>
        <button className="small-search__submit" type="submit">
            <img className="small-search__icon" src={icon} alt="Submit search"/>
        </button>
    </form>

export default () =>{
    const dialog = useDialogState()
    return(
        <div className="small-search">
                <DialogDisclosure {...dialog} className="small-search__opener">
                    <img className="small-search__icon" src={icon} alt="Open search box"/>
                </DialogDisclosure>
                <Dialog className="small-search__dialog" aria-label="Welcome" {...dialog}>
                    <SmallSearchForm/>
                </Dialog>
        </div>
    )
}