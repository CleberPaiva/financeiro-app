import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
    //void - não vai receber um retorno.
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo do financeiro" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Novo lançamento
                </button>
            </Content>
        </Container>
    )

}