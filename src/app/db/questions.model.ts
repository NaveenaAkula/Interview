import { Topic } from "../model/topic";

export class Questions {
    static get questions (): Topic[] {
        return [
            {
                'name': 'Cultural Fit',
                'type': 'Behaviour'
            },
            {
                'name': 'Java',
                'type': 'Java'
            },
            {
                'name': 'Spring',
                'type': 'Spring'
            },
            {
                'name': 'FrontEnd',
                'type': 'FrontEnd'
            },
            {
                'name': 'MicroServices',
                'type': 'MicroServices'
            },
            {
                'name': 'SQL',
                'type': 'SQL'
            }
        ]
    }
}