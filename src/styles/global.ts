import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #231f49;
        --color-secundary: #0b679a;
        --color-green: #bfd12a;
        --color-gray: #6e6e6d;
    }
    
    *{
        margin: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu';
    }
    body{
        background-color: var(--color-primary);
    }
    .closeModal {
        position: absolute;
        top:0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.7;
        &.active{
        display: none;
    }
  }

  .modal {
    &.active{
        display:none;
    }
    transition: 5ms all;
    width: 80vw;
    height: 80vh;
    position: absolute;
    top: calc(50% - 80vh / 2);
    left: calc(50% - 80vw / 2);
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 15px 15px 0 black;
    z-index: 4;
    @media (min-width: 720px) {
      width: 50vw;
      height: 50vh;
      top: calc(50% - 50vh / 2);
      left: calc(50% - 50vw / 2);
    }
    div.header{
        display:flex;
        align-items: center;
        font-size: 1rem;
        padding: 1.25rem;
        justify-content: end;
        h1{
            font-weight: 500;
        }
        svg{
            margin-left: calc(50% - 0.75rem - 93px);
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
    div.content{
        h3{
            font-weight: 400;
        }
        font-weight: 300;
        padding:1rem;
        width: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
        height: 80%;
        text-align: center;
        ul{
            margin: 0;
        padding:0;
            li{
            
                padding: .25rem ;
                list-style: none;
            }
        }
    }
    a.footer{  
        display:flex;
        flex-direction: column;
        align-items:center;
    }
  }
`;
