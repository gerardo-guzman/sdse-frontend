import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

// styles
import { aboutStyles } from './about.styles';
import gerardoPh from '../assets/img/gerardo1.jpg';

export const About = () => {
    const classes = aboutStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item xs={12} sm={8} >
                    <Paper elevation={0} className={classes.paper} >
                        <Typography variant="h3" color="primary">
                            Bienvenido al repositorio no oficial de la UPIITA - IPN
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h6" color="secondary">
                            No necesitas una cuenta para empezar a buscar tus proyectos.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={3} className={classes.paper}> 
                        <Typography variant="subtitle1" color="primary">
                            SDESE
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            SDSE es la abreviación de Semantic Document Search Engine, la pieza modular de estre proyecto.
                            Este es un repositorio en línea que te ayudará a realizar consultas que arrojen resultados relevantes
                            usando un sistema de búsqueda semántico, es decir, los resultados que encontrarás serán de acuerdo al contexto
                            de tu consulta y no solo basados en las coincidencias textuales de la misma.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={0} className={classes.paper} >
                        KeyWords: 
                        <Chip color="secondary" label="Buscador Semántico" className={classes.chip} />
                        <Chip color="secondary" label="Motor de Búsqueda" className={classes.chip} />
                        <Chip color="secondary" label="Ontología" className={classes.chip} />
                        <Chip color="secondary" label="Aplicación web" className={classes.chip} />
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={3} className={classes.paper}> 
                        <Typography variant="subtitle1" color="primary">
                            Planteamiento del problema
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            Uno de los proncipales problemas al inciar un proyecto de investigación es la dificultad para elegir un tema.
                            Aunado a eso, existe la dificultad para encontrar proyectos relacionados con algun tema de particular interés para el alumno, 
                            ya que no todos los proyectos que se han realizados se encuentran dispoonibles en un formato digital de fácil acceso y consulta.
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Justificación
                        </Typography>
                        <Divider />
                        <Typography variant="body1">
                            Queremos que los alumnos en el proceso de elección de tema y aquellos que ya se encuentren realizando un proyecto de investigación
                            tengan una alternativa fácil de usar y acceder para poder realizar consultas bibliográficas y que además puedan obtener resultados
                            relevantes y relacionados a sus intereses y/o habilidades.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper} >
                        <Typography variant="h5" color="primary">
                            Acerca de los programadores
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.cardBg}>
                        <CardHeader 
                            avatar={
                                <Avatar src={gerardoPh} alt="Gerardo Guzmán"/>
                            }
                            title="Gerardo Alberto Guzmán Flores"
                            subheader="Jr. Software Engineer"
                        />
                        <CardContent>
                            <Typography variant="body2" component="p" align="justify">
                                Ingeniero telemático con especial interés en la ingeniería de software. Me encantan los vídeojuegos,
                                la tecnología y sobre todo la aviación y la carrera espacial.
                            </Typography>
                            <Divider />
                            <Typography variant="body2">
                                Las tecnologías que domino
                            </Typography>
                            <Chip className={classes.cardChip} color="primary" size="small" label="JS" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="NodeJS" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="React" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Angular" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="NextJS" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Express" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="MongoDB" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Firebase (BAAS)" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="SQL" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Python" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Material design" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Bootstrap" />
                            <Chip className={classes.cardChip} color="primary" size="small" label="Tailwind" />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};
