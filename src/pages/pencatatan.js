import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/pencatatan.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logoIcon from "../assets/img/1111.png";
import logoIcon2 from "../assets/img/2222.png";
import logoIcon3 from "../assets/img/3333.png";
import logoIcon4 from "../assets/img/4444.png";
import Navbar from "../components/navbar";

const Pencatatan = () => {
	const [pencatatan, setPencatatan] = useState([]);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [pemasukan, setPemasukan] = useState("");
	const [pengeluaran, setPengeluaran] = useState("");
	const [editPemasukan, setEditPemasukan] = useState("");
	const [editPengeluaran, setEditPengeluaran] = useState("");
	const [currentEditId, setCurrentEditId] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(5);

	useEffect(() => {
		getPencatatan();
	}, []);

	const getPencatatan = async () => {
		try {
			const response = await axios.get("http://localhost:8080/Pencatatan");
			setPencatatan(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const openCreateModal = () => setShowCreateModal(true);
	const closeCreateModal = () => setShowCreateModal(false);

	const openEditModal = async (id) => {
		try {
			const response = await axios.get(
				`http://localhost:8080/Pencatatan/detail/${id}`
			);
			setEditPemasukan(response.data.pemasukan);
			setEditPengeluaran(response.data.pengeluaran);
			setCurrentEditId(id);
			setShowEditModal(true);
		} catch (error) {
			console.error(error);
		}
	};

	const closeEditModal = () => setShowEditModal(false);

	const handlePemasukanChange = (e) => setPemasukan(e.target.value);
	const handlePengeluaranChange = (e) => setPengeluaran(e.target.value);

	const handleEditPemasukanChange = (e) => setEditPemasukan(e.target.value);
	const handleEditPengeluaranChange = (e) => setEditPengeluaran(e.target.value);

	const handlePreviousClick = () => {
		setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
	};

	const handleNextClick = () => {
		const totalPages = Math.ceil(pencatatan.length / itemsPerPage);
		setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
	};

	const handlePageClick = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = pencatatan.slice(indexOfFirstItem, indexOfLastItem);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8080/tambah/data", {
				pemasukan,
				pengeluaran,
			});
			if (response.status === 201) {
				closeCreateModal();
				getPencatatan();
				alert("Data berhasil ditambahkan!");
			}
		} catch (error) {
			console.error(error);
			alert("Terjadi kesalahan saat menambahkan data. Silakan coba lagi.");
		}
	};

	const handleEditSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`http://localhost:8080/update/data/${currentEditId}`,
				{ pemasukan: editPemasukan, pengeluaran: editPengeluaran }
			);
			if (response.status === 200) {
				closeEditModal();
				getPencatatan();
				alert("Data berhasil diperbarui!");
			}
		} catch (error) {
			console.error(error);
			alert("Terjadi kesalahan saat memperbarui data. Silakan coba lagi.");
		}
	};

	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/delete/data/${id}`
			);
			if (response.status === 200) {
				getPencatatan();
				setCurrentPage(1);
				alert("Data berhasil dihapus!");
			}
		} catch (error) {
			console.error(error);
			alert("Terjadi kesalahan saat menghapus data. Silakan coba lagi.");
		}
	};

	return (
		<div className="background-logo">
			<Navbar />
			<div className="orange-box">
				<h1>Pencatatan</h1>
			</div>
			<Modal show={showCreateModal} onHide={closeCreateModal}>
				<Modal.Header closeButton>
					<Modal.Title>Tambah Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInputPemasukan"
								placeholder="Masukkan Pemasukan"
								value={pemasukan}
								onChange={handlePemasukanChange}
							/>
							<label htmlFor="floatingInputPemasukan">Pemasukan</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInputPengeluaran"
								placeholder="Masukkan Pengeluaran"
								value={pengeluaran}
								onChange={handlePengeluaranChange}
							/>
							<label htmlFor="floatingInputPengeluaran">Pengeluaran</label>
						</div>
						<Button variant="primary" type="submit">
							Tambahkan Data
						</Button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeCreateModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showEditModal} onHide={closeEditModal}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Data</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleEditSubmit}>
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInputEditPemasukan"
								placeholder="Masukkan Pemasukan"
								value={editPemasukan}
								onChange={handleEditPemasukanChange}
							/>
							<label htmlFor="floatingInputEditPemasukan">Pemasukan</label>
						</div>
						<div className="form-floating mb-3">
							<input
								type="text"
								className="form-control"
								id="floatingInputEditPengeluaran"
								placeholder="Masukkan Pengeluaran"
								value={editPengeluaran}
								onChange={handleEditPengeluaranChange}
							/>
							<label htmlFor="floatingInputEditPengeluaran">Pengeluaran</label>
						</div>
						<Button variant="primary" type="submit">
							Perbaharui
						</Button>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeEditModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="container">
				<button
					className="btn btn-primary btn-tambah-data mb-3"
					onClick={() => {
						openCreateModal();
					}}
				>
					Tambah Data
				</button>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Pemasukan</th>
								<th scope="col">Pengeluaran</th>
								<th scope="col">Actions</th>
							</tr>
						</thead>
						<tbody>
							{currentItems.map((item, index) => (
								<tr key={item.id}>
									<th scope="row">
										{index + 1 + (currentPage - 1) * itemsPerPage}
									</th>
									<td>{item.pemasukan}</td>
									<td>{item.pengeluaran}</td>
									<td>
										<button
											className="btn btn-primary"
											onClick={() => {
												openEditModal(item.id_pencatatan);
											}}
										>
											<i className="fas fa-edit"></i>
										</button>
										<button
											className="btn btn-danger"
											onClick={() => {
												handleDelete(item.id_pencatatan);
											}}
										>
											<i className="fas fa-trash"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className="pagination-container">
						<nav>
							<ul className="pagination">
								<li
									className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
								>
									<button className="page-link" onClick={handlePreviousClick}>
										&laquo;
									</button>
								</li>
								{[
									...Array(Math.ceil(pencatatan.length / itemsPerPage)).keys(),
								].map((number) => (
									<li
										key={number + 1}
										className={`page-item ${
											currentPage === number + 1 ? "active" : ""
										}`}
									>
										<button
											onClick={() => handlePageClick(number + 1)}
											className="page-link"
										>
											{number + 1}
										</button>
									</li>
								))}
								<li
									className={`page-item ${
										currentPage === Math.ceil(pencatatan.length / itemsPerPage)
											? "disabled"
											: ""
									}`}
								>
									<button className="page-link" onClick={handleNextClick}>
										&raquo;
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pencatatan;
