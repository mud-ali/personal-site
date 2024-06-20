"use client";
import React from "react";
import Tool from "../components/tool";
import { AiOutlineLink, AiOutlineLock } from "react-icons/ai";
export default function Card(props) {
	const project = props.project;
	const title = project.title;
	const year = project.year;
	const description = project.description;
	const tools = project.tools;
	const attachments = project.attachments;
	return (
		<div className="p-5 md:p-10 rounded-xl my-5  bg-gray-200 dark:bg-gray-900">
			<div>
				<h3 className="text-xl font-medium dark:text-white 2xl:h-20 ">
					<span className="border-b-4 border-teal-600 dark:border-teal-300 text-left">
						{title + " · " + year}
					</span>
				</h3>
			</div>

			<p className="py-2 2xl:h-40 dark:text-white text-sm text-left">
				{description}
			</p>
			<div className="dark:text-white my-5">
				{attachments ? (
					Object.keys(attachments).map((key) => (
						<a href={attachments[key]} key={key}>
							<div className="flex items-center dark:text-white mb-3">
								<AiOutlineLink className="text-xl  mr-2 my-auto" />
								<p className="my-auto text-sm">{key}</p>
							</div>
						</a>
					))
				) : (
					<div className="flex items-center dark:text-white mb-3">
						<AiOutlineLock className="text-xl  mr-2 my-auto" />
						<p className="my-auto text-sm">Private Project :(</p>
					</div>
				)}
			</div>

			<ul className="flex flex-wrap gap-2 mt-4">
				{tools.map((tool) => (
					<Tool name={tool.name} key={tool.key} />
				))}
			</ul>
		</div>
	);
}
