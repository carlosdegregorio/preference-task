import React from 'react';
import { Badge } from 'react-bootstrap';

const IssueCard = props => {

    const { title, description, status, severity } = props;

    const checkColor = (item) => {
        if (item === "Todo" || item === "High") return "danger";
        else if (item === "Doing" || item === "Medium") return "warning";
        else return "success";
    }

    return (
        <tr>
            <td>
                <Badge pill variant={checkColor(status)}>
                    {status}
                </Badge>{' '}
            </td>
            <td>
                <Badge pill variant={checkColor(severity)}>
                    {severity}
                </Badge>{' '}
            </td>
            <td>{title}</td>
            <td>{description}</td>
        </tr>
    );
};

export default IssueCard;