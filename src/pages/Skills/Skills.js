import React, {Component} from 'react'
import mixer from '../../images/icons/mixer.png'
import './Skills.css'
import $ from 'jquery'

function SkillBar(props) {
    return (
        <div className="skillbar" data-percent={props.skill.fluency}>
            <div className="skillbar-title">
                <span>{props.skill.skill}</span>
            </div>
            <div className="skillbar-bar"></div>
            <div className="skill-bar-percent">{props.skill.fluency}</div>
        </div>
    )
}

function SkillSection(props) {
    const skillbars = props
        .section
        .sets
        .map(s => <SkillBar skill={s} key={s.skill}/>)
    return (
        <div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="skills-title">
                    <h6 className="text-center">{props.section.type}</h6>
                </div>
                {skillbars}
            </div>
        </div>
    )
}
export default class Skills extends Component {

    componentDidMount() {
        $(window)
            .on('load', function () {

                function initSkills() {
                    $('div.skillbar')
                        .each(function () {
                            $(this)
                                .find('div.skillbar-bar')
                                .animate({
                                    width: $(this).attr('data-percent')
                                }, 6000);
                        });
                }

                initSkills();
            })

    }
    render() {

        if (!this.props.skills) {
            return null
        }

        const skillsections = this
            .props
            .skills
            .map(s => <SkillSection section={s} key={s.type}/>)

        return (
            <section id="skills" className="section">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-uppercase text-center"><img alt="mixer" src={mixer}/>Skills</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div id="skills-card" className="card">
                                <div className="card-content">
                                    <div className="row">
                                        {skillsections}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}