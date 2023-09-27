import { useEffect, useState } from "react"

const Formulario = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function calculaImc() {
        return ((peso) / ((altura / 100) * (altura / 100)))
    }

    const renderizaResultado = () => {
        if (calculaImc() < 18.5) {
            return (
                <div>
                    <p>18,5 ou menos</p>
                    <b>Abaixo do normal</b>
                    <p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>
                </div>
            )
        } else if (calculaImc() >= 18.5 && calculaImc() <= 24.99) {
            return (
                <div>
                    <p>Entre 18,6 e 24,9</p>
                    <b>Normal</b>
                    <p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
                </div>
            )
        } else if (calculaImc() >= 25 && calculaImc() <= 29.99) {
            return (
                <div>
                    <p>Entre 25,0 e 29,9</p>
                    <b>Sobrepeso</b>
                    <p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
                </div>
            )
        } else if (calculaImc() >= 30 && calculaImc() <= 34.99) {
            return (
                <div>
                    <p>Entre 30,0 e 34,9</p>
                    <b>Obesidade grau 1</b>
                    <p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
                </div>
            )
        } else if (calculaImc() >= 35 && calculaImc() <= 39.99) {
            return (
                <div>
                    <p>Entre 35,0 e 39,9</p>
                    <b>Obesidade grau 2</b>
                    <p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>
                </div>
            )
        } else if (calculaImc() >= 40) {
            return (
                <div>
                    <p>Acima de 40,0</p>
                    <b>Obesidade grau 3 (obesidade mórbida)</b>
                    <p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>
                </div>
            )
        }
    }

    function exibeResultado() {
        if (peso > 9 && altura >= 40) {
            return true
        } else {
            return false
        }
    }


    return (
        <>
            <section>
                <div className="row pt-4">
                    <div className="col-md-8">
                        <b>Digite as informações abaixo para calcular o seu IMC</b>
                        <form>
                            <div>
                                <input className="form-control" type="number" min={0} placeholder="Peso (kg)" required onChange={evento => setPeso(evento.target.value)} />
                            </div>
                            <div className="pt-4">
                                <input className="form-control" type="number" min={0} placeholder="Altura (cm)" required onChange={evento => setAltura(evento.target.value)} />
                            </div>
                            {/* <div className="pt-4">
                                <button onClick={() => setResultado(!resultado)} className="btn btn-primary" type="submit">Calcular</button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </section>
            <section className="pt-4">
                <div className="row">
                    <div className="col-md-8">
                        {exibeResultado() && (
                            <>
                                <p className="fs-3 text">Seu IMC é: {calculaImc().toFixed(2)}</p>
                                <div>
                                    {renderizaResultado()}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Formulario