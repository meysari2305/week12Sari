import React from 'react';
import { Select } from 'antd';
import styles from './State.module.css';

const { Option } = Select;

interface Props {
  value: string;
  onChange: (e: string | React.ChangeEvent) => void
  status: "" | "error" | "warning" | undefined
}

const State: React.FC<Props> = ({value, onChange, status}) => {
  return (
    <>
        <Select className={styles.select} placeholder="Please select your State" value={value} onChange={onChange} status={status}>
          <Option value="Nanggroe Aceh Darussalam">Nanggroe Aceh Darussalam</Option>
          <Option value="Sumatera Utara">Sumatera Utara</Option>
          <Option value="Sumatera Selatan">Sumatera Selatan</Option>
          <Option value="Sumatera Barat">Sumatera Barat</Option>
          <Option value="Bengkulu">Bengkulu</Option>
          <Option value="Riau">Riau</Option>
          <Option value="Kepulauan Riau">Kepulauan Riau</Option>
          <Option value="Jambi">Jambi</Option>
          <Option value="Lampung">Lampung</Option>
          <Option value="Bangka Belitung">Bangka Belitung</Option>
          <Option value="Kalimantan Barat">Kalimantan Barat</Option>
          <Option value="Kalimantan Timur">Kalimantan Timur</Option>
          <Option value="Kalimantan Selatan">Kalimantan Selatan</Option>
          <Option value="Kalimantan Tengah">Kalimantan Tengah</Option>
          <Option value="Kalimantan Utara">Kalimantan Utara</Option>
          <Option value="Banten">Banten</Option>
          <Option value="DKI Jakarta">DKI Jakarta</Option>
          <Option value="Jawa Barat">Jawa Barat</Option>
          <Option value="Jawa Tengah">Jawa Tengah</Option>
          <Option value="Daerah Istimewa Yoyakarta">Daerah Istimewa Yoyakarta</Option>
          <Option value="Jawa Timur">Jawa Timur</Option>
          <Option value="Bali">Bali</Option>
          <Option value="Nusa Tenggara Timur">Nusa Tenggara Timur</Option>
          <Option value="Nusa Tenggara Barat">Nusa Tenggara Barat</Option>
          <Option value="Gorontalo">JGorontalo</Option>
          <Option value="Sulawesi Barat">Sulawesi Barat</Option>
          <Option value="Sulawesi Tengah">Sulawesi Tengah</Option>
          <Option value="Sulawesi Utara">Sulawesi Utara</Option>
          <Option value="Sulawesi Tenggara">Sulawesi Tenggara</Option>
          <Option value="Sulawesi Selatan">Sulawesi Selatan</Option>
          <Option value="Maluku Utara">Maluku Utara</Option>
          <Option value="Papua Barat">Papua Barat</Option>
          <Option value="Papua">Papua</Option>
          <Option value="Papua Tengah">Papua Tengah</Option>
          <Option value="Papua Pegunungan">Papua Pegunungan</Option>
          <Option value="Papua Selatan">Papua Selatan</Option>
          <Option value="Papua Barat Daya">Papua Barat Daya</Option>
        </Select>
    </>
  )
};

export default State;

