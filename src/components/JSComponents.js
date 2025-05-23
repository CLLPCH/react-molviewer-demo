import React, { useEffect, useState } from 'react';
import { MolViewer } from 'react-molviewer';
import pkg from '../../package.json';
import { styleExample1, styleExample2 } from '../jmscripts/templates';

const { name, version, dependencies } = pkg;
const { 'react-molviewer': reactMolviewerVersion } = dependencies;

// https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8002/record/SDF?record_type=3d
function JSPubChem() {
  return (
    <div className="full-container">
      <h2>
        {name} Ver. {version} (react-molviewer Ver. {reactMolviewerVersion})
      </h2>
      <MolViewer
        molContent="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/8002/record/SDF?record_type=3d"
        viewType="file"
        fnCb={() => {}}
        fnInit={() => {}}
      />
    </div>
  );
}

// https://www.chemotion-repository.net/api/v1/public/molecule.json?id=1139
function JSChemRepo() {
  const [molContent, setMolContent] = useState('');

  const fetchMolContent = async () => {
    try {
      const response = await fetch('/api/chemotion/molecule.json?id=1139');
      if (response.ok) {
        const data = await response.json();
        const { molfile } = data.molecule;
        setMolContent(molfile);
      }
    } catch (error) {
      console.log('error=', error);
    } finally {
      console.log('finally');
    }
  };

  useEffect(() => {
    fetchMolContent();
  }, []);

  if (molContent === '') return <span>Loading...</span>;

  return (
    <div className="full-container">
      <h2>
        {name} Ver. {version} (react-molviewer Ver. {reactMolviewerVersion})
      </h2>
      <MolViewer
        molContent={molContent}
        viewType="mol"
        fnCb={() => {}}
        fnInit={() => {}}
        jmScripts={[styleExample1]}
      />
    </div>
  );
}

// http://localhost:8080/jsmol/data/1xdn.pdb
function JSPDB() {
  return (
    <div className="full-container">
      <h2>
        {name} Ver. {version} (react-molviewer Ver. {reactMolviewerVersion})
      </h2>
      <MolViewer
        molContent="http://localhost:8080/jsmol/data/1xdn.pdb"
        viewType="file"
        fnCb={() => {}}
        fnInit={() => {}}
        jmScripts={[styleExample2]}
      />
    </div>
  );
}

// http://localhost:8080/jsmol/data/caffeine.mol
function JSComponent() {
  return (
    <div className="full-container">
      <h2>
        {name} Ver. {version} (react-molviewer Ver. {reactMolviewerVersion})
      </h2>
      <MolViewer
        molContent="http://localhost:8080/jsmol/data/caffeine.mol"
        viewType="file"
        fnCb={() => {}}
        fnInit={() => {}}
      />
    </div>
  );
}

export { JSComponent, JSChemRepo, JSPubChem, JSPDB };
