import React, {useState} from "react";
import {Paper, Table} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {binominal} from "../../math";

const styles = {
    container: {
        minHeight: '50vh',
        width: '80vw',
        padding: '10px',
        marginTop: "30px"
    },
    form: {
        display: "flex",
        justifyContent: "center",
    },
    field: {
        margin: '10px'
    },
    fields: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    button: {
        marginLeft: '50px'
    }
}

export const Form = () => {

    const [hidden, setHidden] = useState(true)

    const [successChance, setSuccessChance] = useState(0);
    const [tryCount, setTryCount] = useState(0);
    const [successCount, setSuccessCount] = useState(0);
    const [result, setResult] = useState(0);
    const [allResult, setAllResult] = useState(0)

    const handleCalculateClick = () => {
        setResult(binominal(successCount, tryCount, successChance))
        setHidden(false)
        let total = 0;
        for (let i = 0; i < successCount; i++) {
            total += binominal(i, tryCount, successChance)
        }
        setAllResult(total)
    }

    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Paper style={styles.container} square elevation={3}>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"}>
                    <TextField type={"number"} style={styles.field} label={"Probabilidade de successo (%)"} variant={"outlined"} value={successChance} onChange={e => setSuccessChance(parseFloat(e.target.value)/100)}/>
                    <TextField type={"number"} style={styles.field} label={"Numero de tentativas"} variant={"outlined"} value={tryCount} onChange={e => setTryCount(parseFloat(e.target.value))}/>
                    <TextField type={"number"} style={styles.field} label={"Tentativas de sucesso"} variant={"outlined"} value={successCount} onChange={e => setSuccessCount(parseFloat(e.target.value))}/>
                    <Button style={styles.button} variant={"contained"} color={"primary"}  onClick={handleCalculateClick}>Calcular</Button>
                </Box>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", marginTop: "10px"}}>
                    {!hidden && (<span style={{textAlign: "center"}}><span style={{fontWeight: "bold"}}>Probabilidade Binomial Individual: </span>{result} ({result * 100}%) </span>)}
                    {!hidden && (<span style={{textAlign: "center"}}><span style={{fontWeight: "bold"}}>Probabilidade Binomial Acumulativa:</span> {allResult} ({allResult * 100}%)</span>)}
                </div>
            </Paper>
        </Box>

    )
}
