import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, settype] = useState('deposit');
        
    
    return (
        <Modal
            isOpen={isOpen}
            //se precionar Esc, então, fecha a tela.
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"            
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close"> 
                <img src={closeImg} alt="Fechar"/>
            </button>
            
            <Container>
                <h2>Cadastrar transações</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />


                <TransactionTypeContainer> 

                    <RadioBox 
                        type="button" 
                        onClick={()=> {settype('deposit');}}
                        isActive={type === 'deposit'}
                    >

                        <img src={incomeImg} alt="Entrada" />;
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={()=> {settype('withdraw');}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />;
                        <span>Saída</span>
                    </RadioBox>


                </TransactionTypeContainer>



                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    );
}

