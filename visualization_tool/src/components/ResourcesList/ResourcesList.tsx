import {Resource} from '../../types/resources';
import {typeToImage, statusToColor} from './utils';

import './ResourcesList.css';

type ResourcesListProps = {resources: Resource[]};

const ResourcesList = ({resources}: ResourcesListProps) => {
  return (
    <div className="resources-list">
      <h1>{resources.length > 0 ? 'Found Resources' : 'No Resources Found'}</h1>
      <div className="resources-list__table">
        {resources
          // sort resources by creationTimestamp
          .sort((a, b) => {
            return (
              new Date(a.creationTimestamp).getTime() -
              new Date(b.creationTimestamp).getTime()
            );
          })
          .map(resource => {
            return (
              <div className="resources-list__table__card" key={resource.id}>
                <img src={typeToImage(resource)} alt="" />
                <p className="resource-name">{resource.name}</p>
                <p className="resource-type">{resource.type}</p>
                <p
                  className="resource-status"
                  style={{
                    color: statusToColor(resource.status),
                  }}
                >
                  {resource.status}
                </p>
                <button>Details</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ResourcesList;
